import React from "react";
import IndividualTweet from "../Twitter/IndividualTweet";

const UsersMetrics = () => {
  return (
    <div className="mx-auto my-12">
      <h1 className="text-4xl font-bold mb-12">Reporte diario</h1>
      <table class="table-auto">
        <thead className="border">
          <tr>
            <th className="mx-12 px-12">Usuario</th>
            <th className="mx-12 px-12">Tweets creados</th>
            <th className="mx-12 px-12">Tweets comentados</th>
            <th className="mx-12 px-12">Cantidad de veces que abrió la app</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="mx-12 px-12">User</td>
            <td className="mx-12 px-12">100</td>
            <td className="mx-12 px-12">321</td>
            <td className="mx-12 px-12">1000</td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto my-12">
        <h1 className="text-2xl font-bold mb-4">Tweet mas comentado</h1>
        <IndividualTweet />
      </div>
    </div>
  );
};

export default UsersMetrics;
