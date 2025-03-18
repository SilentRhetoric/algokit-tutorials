import { useState } from "react";

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;
export type JSONObject = { [key: string]: JSONValue };
export type JSONArray = JSONValue[];

interface JSONTreeViewProps {
  data: JSONValue;
}

export function JSONTreeView(props: JSONTreeViewProps) {
  return (
    <div className="font-mono text-sm">
      <TreeNode label="root" value={props.data} />
    </div>
  );
}

interface TreeNodeProps {
  label: string;
  value: JSONValue;
}

function TreeNode(props: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandable = () => {
    return (
      typeof props.value === "object" &&
      props.value !== null &&
      Object.keys(props.value).length > 0
    );
  };

  const toggleExpand = () => {
    if (isExpandable()) {
      setIsExpanded(!isExpanded);
    }
  };

  const renderValue = () => {
    if (Array.isArray(props.value)) {
      return `Array(${props.value.length})`;
    } else if (typeof props.value === "object" && props.value !== null) {
      return `Object`;
    } else {
      return String(props.value);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center ${isExpandable() ? "cursor-pointer" : ""}`}
        onClick={toggleExpand}
      >
        {isExpandable() ? (
          isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="mr-2 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="mr-2 size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )
        ) : (
          <span className="mr-2 w-4"></span>
        )}
        <span className="mr-2">{props.label}:</span>
        <span
          className={`${typeof props.value === "string" ? "text-green-500" : "text-blue-500"}`}
        >
          {renderValue()}
        </span>
      </div>
      {isExpanded && isExpandable() && (
        <div className="ml-2 border-l-[0.5px] pl-4">
          {Object.entries(props.value as JSONObject).map(([key, val]) => (
            <TreeNode label={key} value={val} />
          ))}
        </div>
      )}
    </div>
  );
}
