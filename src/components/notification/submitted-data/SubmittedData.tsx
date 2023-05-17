import { FC } from "react";

interface SubmittedDataProps {
  data: Record<string, string>;
}

const SubmittedData: FC<SubmittedDataProps> = ({ data }) => {
  return (
    <div>
      <table>
        <caption>Submitted values</caption>
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([name, value]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedData;
