import { models } from "@/helpers/models";
import RankingImage from "../../public/images/Ranking.svg";

const LeaderBoardInfo = () => {
  //ADD A LINIT FOR z for a rocket
  return (
    <div className="h-[80%]  overflow-x-auto sm:overflow-x-hidden  w-[95%] bg-background  font-clash text-white ">
      {/* <table className="w-[360px] sm:w-full  table-auto text-left"> */}
      <table className="min-w-[800px] sm:w-full table-auto text-left">
        <thead className="sticky top-0 bg-background z-10 ">
          <tr>
            <th className="p-2 sm:p-6">
              <span className="mr-10">#</span>Model Name
            </th>
            <th className="p-2">Average</th>
            <th className="p-2">ARC</th>
            <th className="p-2">HellaSwag</th>
            <th className="p-2">MMLU</th>
            <th className="p-2">TruthfulQA</th>
            <th className="p-2">Winogrande</th>
            <th className="p-2">GSM8K</th>
            <th className="p-2">Usage</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr key={model.ModelName} className="hover:bg-blue-950">
              <td className="flex items-start justify-start gap-4 ">
                <model.Image
                  className={`w-[19px] h-[17px] ${
                    model.Image === RankingImage ? "grayscale opacity-60" : ""
                  }`}
                />
                <td className="">{index + 1}</td>
                <span>{model.ModelName}</span>
              </td>
              <td className="p-4">{model.Average}</td>
              <td className="p-4">{model.ARC}</td>
              <td className="p-4">{model.HellaSwag}</td>
              <td className="p-4">{model.MMLU}</td>
              <td className="p-4">{model.TruthfulQA}</td>
              <td className="p-4">{model.Winogrande}</td>
              <td className="p-4">{model.GSM8K}</td>
              <td className="p-4">{model.Usage.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { LeaderBoardInfo };
