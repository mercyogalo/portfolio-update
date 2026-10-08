import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-heading" align="center">
          Skills
        </SectionHeading>
        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg font-bold">{group.title}</h3>
              <Stagger className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <StaggerItem key={skill}>
                    <span className="inline-flex rounded-full border border-border px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-accent">
                      {skill}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
