import React from "react";
import variables from "../../../packages/syntax-design-tokens/dist/json/variables.json";

export default function Colors() {
  const groupColors = Object.entries(variables).reduce(
    (acc, [key, value]) => {
      if (
        key.includes("black") ||
        key.includes("white") ||
        key.includes("gray")
      ) {
        // @ts-expect-error
        acc["Grayscale"].push({ key, value });
      } else if (key.includes("primary")) {
        // @ts-expect-error
        acc["Primary"].push({ key, value });
      } else if (key.includes("destructive")) {
        // @ts-expect-error
        acc["Destructive"].push({ key, value });
      } else {
        // @ts-expect-error
        acc["Extended Palette"].push({ key, value });
      }

      return acc;
    },
    {
      Grayscale: [],
      Primary: [],
      Destructive: [],
      "Extended Palette": [],
    },
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {Object.entries(groupColors).map(([group, colors]) => {
        return (
          <>
            <h2>{group}</h2>
            {colors.map(({ key, value }) => {
              const [number] = (key as string).match(/\d\d\d/g) ?? [];
              return (
                <div
                  key={key}
                  style={{
                    color:
                      [
                        "color-base-gray-10",
                        "color-base-gray-30",
                        "color-base-white",
                      ].includes(key) ||
                      (number && parseInt(number) < 400)
                        ? "black"
                        : "white",

                    backgroundColor: value,
                    padding: 8,
                    borderRadius: 8,
                  }}
                >
                  --{key}: {value}
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
