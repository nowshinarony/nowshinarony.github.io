const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center leading-loose">
        <p>
          Email me:{" "}
          <a href="mailto:nowshinarony@outlook.com">nowshinarony@outlook.com</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Nowshin Nawar Arony. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
