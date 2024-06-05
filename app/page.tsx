import { getExperts } from "@/sanity/sanity-utils";
import ExpertsSection from "@/components/ExpertsSection";
import { ExpertsProps } from "@/types";
import { newsreader } from './fonts'

export default async function Home() {
  const experts: ExpertsProps[] = await getExperts();

  return (
    <main className={["flex flex-col container mx-auto font-light", newsreader.className].join(' ')}>
      <h1 className="text-6xl text-center">HELLO</h1>
      <ExpertsSection data={experts} />
    </main>
  );
}
