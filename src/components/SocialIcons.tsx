import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { MdSmartToy, MdSend } from "react-icons/md";

const SocialIcons = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [answer, setAnswer] = useState(
    "Hi, I am Sangram AI assistant. Ask anything about this portfolio: summary, skills, projects, experience, contact, social links, or resume."
  );

  const getAiAnswer = (question: string) => {
    const q = question.toLowerCase().trim();
    const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);

    const knowledge = [
      {
        topic: "summary",
        keywords: [
          "about",
          "summary",
          "introduce",
          "who",
          "profile",
          "sangram",
          "yourself",
        ],
        answer:
          "Sangram Das is a full-stack developer and B.Tech CSE student focused on building modern web applications with strong frontend UI and scalable backend services.",
      },
      {
        topic: "skills",
        keywords: [
          "skill",
          "stack",
          "tech",
          "technology",
          "frontend",
          "backend",
          "react",
          "next",
          "node",
          "nestjs",
          "typescript",
          "javascript",
          "postgresql",
          "mongodb",
          "threejs",
        ],
        answer:
          "Core skills include React.js, Next.js, JavaScript, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, and Three.js. He also works with HTML, CSS, Java, Advanced Java, JDBC, and Servlets.",
      },
      {
        topic: "projects",
        keywords: [
          "project",
          "work",
          "portfolio",
          "doctor",
          "appointment",
          "demo",
          "live",
          "banner",
        ],
        answer:
          "Featured project is Doctor Appointment Booking System. Visitors can click the project banner in the Work section to open the live deployed app.",
      },
      {
        topic: "education",
        keywords: ["education", "degree", "college", "student", "study", "btech", "cse"],
        answer:
          "Education: B.Tech in Computer Science and Engineering. Sangram is focused on practical full-stack development and continuous learning.",
      },
      {
        topic: "contact",
        keywords: [
          "contact",
          "email",
          "reach",
          "connect",
          "hire",
          "message",
          "mail",
        ],
        answer:
          "Contact email: dassangram171@gmail.com. You can also connect through LinkedIn, GitHub, Twitter, and Instagram links available on the portfolio.",
      },
      {
        topic: "resume",
        keywords: ["resume", "cv", "download", "pdf"],
        answer:
          "Resume is available from the RESUME button and opens as a PDF. You can download it directly from there.",
      },
      {
        topic: "social",
        keywords: ["github", "linkedin", "twitter", "x", "instagram", "social"],
        answer:
          "Social profiles: GitHub (sangram-ui), LinkedIn, Twitter/X, and Instagram are linked in the side social icon section.",
      },
    ];

    let bestMatch = "";
    let bestScore = 0;

    knowledge.forEach((item) => {
      const score = item.keywords.reduce((acc, keyword) => {
        if (q.includes(keyword) || tokens.includes(keyword)) return acc + 1;
        return acc;
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item.answer;
      }
    });

    if (bestScore > 0) return bestMatch;

    return "I can answer portfolio-related questions about summary, skills, projects, education, contact, social links, and resume. Try asking: 'What is your tech stack?' or 'How can I contact you?'";
  };

  const handleAsk = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setAnswer("Please type a question first.");
      return;
    }
    setLastQuestion(trimmedQuery);
    setQuery("");
    setIsAsking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmedQuery }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      if (data?.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer(getAiAnswer(trimmedQuery));
      }
    } catch (_error) {
      // Fallback keeps assistant usable during local dev or missing API key.
      setAnswer(getAiAnswer(trimmedQuery));
    } finally {
      setIsAsking(false);
    }
  };

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/sangram-ui" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/sangram-das-8426522a1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/SangramDas7211" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/_sangram_90/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <button
        className="ai-button"
        type="button"
        onClick={() => setIsAiOpen((prev) => !prev)}
        data-cursor="disable"
      >
        <HoverLinks text="ASK AI" />
        <span>
          <MdSmartToy />
        </span>
      </button>
      {isAiOpen && (
        <div className="ai-panel">
          <h4>Ask About Sangram</h4>
          {lastQuestion && <p className="ai-last-question">You asked: {lastQuestion}</p>}
          <p>{answer}</p>
          <div className="ai-input-wrap">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about this portfolio..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isAsking) handleAsk();
              }}
            />
            <button
              type="button"
              onClick={handleAsk}
              aria-label="Ask AI"
              disabled={isAsking}
            >
              {isAsking ? "..." : <MdSend />}
            </button>
          </div>
        </div>
      )}
      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
