import { GlassFooter } from "@/components/glass/GlassFooter";
import { CopyButton } from "@/components/ui/CopyButton";
import { contact } from "@/content/contacts";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <GlassFooter>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="section-kicker">Дальше</p>
              <p className="display-title mt-3 text-3xl text-white sm:text-4xl">
                {site.name}
              </p>
              <p className="mt-3 text-muted">{site.role}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{contact.nextStep}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {contact.links.map((link) => (
                <div key={link.id} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="cursor-pointer text-white hover:text-accent"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    {link.label}
                  </a>
                  <CopyButton value={link.copyValue} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <p>Статический сайт. Тексты, проекты и контакты живут в отдельных конфигурационных файлах.</p>
          </div>
        </GlassFooter>
      </div>
    </footer>
  );
}
