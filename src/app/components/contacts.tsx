export default function Contacts() {
  return (
    <div className="mt-3">
      <p className="font-bold">Links</p>
      <div className="mt-2 flex  gap-3 text-">
        <a
          href="https://www.linkedin.com/in/aldifahrizi"
          className="text-sm text-blue-600 hover:underline"
          target="blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aldifhrent"
          className="text-sm text-blue-600 hover:underline"
          target="blank"
        >
          Github
        </a>
        <a
          href="https://www.instagram.com/aldi.fhr"
          className="text-sm text-blue-600 hover:underline"
          target="blank"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/+6282218718161"
          className="text-sm text-blue-600 hover:underline"
          target="blank"
        >
          Phone Number
        </a>
      </div>
    </div>
  );
}
