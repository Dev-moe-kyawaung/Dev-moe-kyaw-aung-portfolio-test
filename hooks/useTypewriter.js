// hooks/useTypewriter.js
export function useTypewriter(texts, speed = 50, delayBetween = 1000) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[index];

      if (charIndex < current.length) {
        setDisplayedText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, delayBetween);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, texts, speed, delayBetween]);

  return displayedText;
}
