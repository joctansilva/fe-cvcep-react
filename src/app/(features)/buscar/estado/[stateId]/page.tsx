import { StatePage } from "@/app/(features)/buscar/estado/[stateId]/components/StatePage/StatePage";

const SearchByState = ({ params }: { params: { stateId: string } }) => {
  const { stateId } = params;
  return <StatePage stateId={stateId} />;
};

export default SearchByState;
