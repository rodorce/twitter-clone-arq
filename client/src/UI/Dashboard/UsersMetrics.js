import React from "react";
import IndividualTweet from "../Twitter/IndividualTweet";

const UsersMetrics = (props) => {
  return (
    <div className="mx-auto my-12">
      <table className="table-auto mx-auto">
        <thead className="border">
          <tr>
            <th className="mx-12 px-12">Usuario</th>
            <th className="mx-12 px-12">Tweets creados</th>
            <th className="mx-12 px-12">Cantidad de tweets comentados</th>
            <th className="mx-12 px-12">Cantidad de veces que abrió la app</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="mx-12 px-12">{props.event.user}</td>
            <td className="mx-12 px-12">{props.event.tweets}</td>
            <td className="mx-12 px-12">{props.event.replies}</td>
            <td className="mx-12 px-12">{props.event.app_log}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersMetrics;
