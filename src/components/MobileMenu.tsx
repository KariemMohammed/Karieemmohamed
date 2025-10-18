interface Props {
  setMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ setMenuOpen }: Props) {
  return (
    <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg z-40">
      {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="hover:text-green-400 transition"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
