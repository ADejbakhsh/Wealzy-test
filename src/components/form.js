import React from "react";

export default ({ handleChange,  post }) => {
  return (
    <div >
      <form>
        <div>
          <input
            name="mediane"
            onChange={handleChange}
            type="number"
            value={post.mediane}
            placeholder="mediane"
          />
        </div>
        <div>
          <input
            name="moyenne"
            onChange={handleChange}
            type="number"
            value={post.moyenne}
            placeholder="moyenne"
          />
        </div>
        <div>
          <input
            name="echantillonnage"
            onChange={handleChange}
            type="number"
            value={post.echantillonnage}
            placeholder="échantillonnage"
          />
        </div>
      </form>

    </div>
  );
};
