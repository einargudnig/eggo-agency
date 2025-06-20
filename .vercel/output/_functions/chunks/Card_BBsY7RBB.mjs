import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderSlot, b as renderTemplate } from './astro/server_BwzKAyNM.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/einargudjonsson/personal/eggo-agency/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
