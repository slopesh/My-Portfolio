import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import PresenceCard from "@/components/PresenceCard";
import { useEffect, useState } from "react";

// TODO: Refactor all <img> icons to use next/image for further optimization. next/image does not support external SVGs and favicons easily, so this requires custom handling.

export default function About() {
  // Frontend Technologies - Add more as needed
  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "TailwindCSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />, link: "https://tailwindcss.com/" },
    { title: "React", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />, link: "https://react.dev/" },
    { title: "NextJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />, link: "https://nextjs.org/" },
    { title: "ThreeJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" />, link: "https://threejs.org/" },
    { title: "Vue", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />, link: "https://vuejs.org/" },
    { title: "NuxtJS", icon: <svg className="h-5 w-[30px]" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z" fill="#00DC82"></path></svg>, link: "https://nuxt.com/" },
    { title: "Figma", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />, link: "https://figma.com"},
    { title: "Framer Motion", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png" />, link: "https://www.framer.com/motion/" },
    { title: "Motion", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=motion.dev" />, link: "https://motion.dev/" },
    { title: "Sass", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />, link: "https://sass-css.org/" },
    { title: "Gsap", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/zkji5ma1.png" />, link: "https://gsap.com/" },
    { title: "MaterialUI", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />, link: "https://mui.com/" },
    { title: "ShadCN", icon: <img alt="" draggable={false} className="h-6" src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/favicon.ico" />, link: "https://ui.shadcn.com/" },
    { title: "CloudCannon", icon: <img alt="CloudCannon" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=cloudcannon.com" />, link: "https://cloudcannon.com/" }
    // Add more frontend technologies here - just copy the format above
  ]

  // Backend Technologies - Add more as needed
  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://www.javascript.com/" },
    { title: "TypeScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />, link: "https://www.typescriptlang.org" },
    { title: "NodeJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />, link: "https://nodejs.org/" },
    { title: "Postman", icon: <img alt="" draggable={false} className="h-6" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />, link: "https://www.postman.com/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "Redis", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" />, link: "https://redis.io/" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discord.js.org/" },
    { title: "Fastify", icon: <img alt="" draggable={false} className="h-5" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png" />, link: "https://fastify.dev/" },
    { title: "Bun", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />, link: "https://bun.sh/" },
    { title: "Elysia", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/y1iick8a.png" />, link: "https://elysiajs.com/" },
    { title: "Datadoghq", icon: <img alt="" draggable={false} className="h-6" src="https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg" />, link: "https://www.datadoghq.com/" },
    { title: "Sentry", icon: <img alt="" draggable={false} className="h-6" src="https://www.vectorlogo.zone/logos/sentryio/sentryio-icon.svg" />, link: "https://sentry.io/welcome/" },
    { title: "Morningscore", icon: <img alt="Morningscore" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=morningscore.io" />, link: "https://morningscore.io/" },
    { title: "Auth0", icon: <img alt="Auth0" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=auth0.com" />, link: "https://auth0.com/" },
    { title: "RubyOnRails", icon: <img alt="RubyOnRails" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=rubyonrails.org" />, link: "https://rubyonrails.org/" }
    // Add more backend technologies here - just copy the format above
  ]

  // Other Technologies & Tools - Add more as needed
  let otherTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "PostHog", icon: <img alt="" draggable={false} className="h-6" src="https://icon.horse/icon/posthog.com" />, link: "https://posthog.com/" },
    { title: "Betterstack", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=betterstack.com" />, link: "https://betterstack.com/" },
    { title: "Fastly", icon: <img alt="" draggable={false} className="h-6" src="https://www.vectorlogo.zone/logos/fastly/fastly-icon.svg" />, link: "https://www.fastly.com/" },
    { title: "cside", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=cside.dev" />, link: "https://cside.dev/" },
    { title: "Zed", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=zed.dev" />, link: "https://zed.dev/" },
    { title: "Raycast", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=raycast.com" />, link: "https://www.raycast.com/" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Insomnia", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png" />, link: "https://insomnia.rest/" },
    { title: "Cloudflare", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" />, link: "https://www.cloudflare.com/" },
    { title: "Tailscale", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/9aivscb1.png" />, link: "https://tailscale.com/" },
    { title: "Hetzner", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" />, link: "https://www.hetzner.com/" },
    { title: "Porkbun", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png" />, link: "https://porkbun.com/" },
    { title: "Coolify", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/92tzzi14.png" />, link: "https://coolify.io" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
    { title: "Tensorflow", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />, link: "https://www.tensorflow.org/" },
    { title: "MacBrew", icon: <img alt="" draggable={false} className="h-6" src="https://brew.sh/assets/img/homebrew-256x256.png" />, link: "https://brew.sh/" },
    { title: "Hyper", icon: <img alt="Hyper" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=hyper.is" />, link: "https://hyper.is/" },
    { title: "Firebase", icon: <img alt="Firebase" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=firebase.studio" />, link: "https://firebase.studio/" },
    { title: "Cobalt", icon: <img alt="Cobalt" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=cobalt.tools" />, link: "https://cobalt.tools/" },
    { title: "OpenRouter", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=openrouter.ai" />, link: "https://openrouter.ai/" },
    { title: "Roocode", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=roocode.com" />, link: "https://roocode.com/" },
    { title: "Mobbin", icon: <img alt="" draggable={false} className="h-6" src="https://www.google.com/s2/favicons?sz=64&domain_url=mobbin.com" />, link: "https://mobbin.com/" }
    // Add more tools and technologies here - just copy the format above
  ]

  const [presence, setPresence] = useState<Presence | null>(null);
  const [date, setDate] = useState(new Date());
  const discordId = "798136745068855326";
  useEffect(() => {
    const socket = new WebSocket(`wss://api.lanyard.rest/socket`);

    const handleOpen = () => {
      console.log("Lanyard WebSocket connected!");
      socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: discordId } }));
    };

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.op === 1) { // Opcode 1: HELLO
        const heartbeatInterval = data.d.heartbeat_interval;
        setInterval(() => {
          socket.send(JSON.stringify({ op: 3 }));
        }, heartbeatInterval);
      } else if (data.op === 0) { // Opcode 0: EVENT
        setPresence(data.d);
      }
    };

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);

    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      socket.close();
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <div className="flex flex-col gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="Hey! I'm Arrays — a 16-year-old Full Stack Developer with nearly 4 years of hands-on experience across a wide range of tech stacks. I specialize in building scalable applications, experimenting with backend infrastructure, and creating smooth frontend experiences. Since 2018, I've also been deeply rooted in the technical Minecraft scene, working on everything from custom clients and proxy spoofers to automation systems and community tooling. I've proudly contributed to several major underground and open-source projects in that space. Outside of code, I'm an aviation geek, obsessed with flight routes, aircraft systems, and spontaneous travel ideas. I'm also pretty introverted—I don't talk much, but I build a lot."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <AboutCard
              title="Frontend"
              description="I have experience with modern frontend frameworks and libraries, creating responsive and user-friendly interfaces."
              tech={frontendTech}
              direction="left"
              span={1}
              delay={0.15}
              gradient="bg-gradient-to-br"
            />
            <AboutCard
              title="Backend"
              description="I work with various backend technologies to build robust APIs and server-side applications."
              tech={backendTech}
              direction="right"
              span={1}
              delay={0.2}
              gradient="bg-gradient-to-bl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <div className={`${presence && presence.activities && presence.activities.length > 0 ? 'md:col-span-1' : 'md:col-span-2'}`}>
              <AboutCard
                title="Other Technologies"
                description="I use a variety of tools, services, and technologies to streamline the development process."
                tech={otherTech}
                direction="bottom"
                span={1}
                delay={0.1}
                gradient="bg-gradient-to-tr"
              />
            </div>
            {presence && presence.activities && presence.activities.length > 0 && (
              <div className="md:col-span-1">
                <PresenceCard
                  presence={presence}
                  date={date}
                  direction="bottom"
                  span={1}
                  delay={0.1}
                  gradient="bg-gradient-to-tl"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
