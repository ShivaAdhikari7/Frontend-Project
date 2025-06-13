import { MoreVertical } from "lucide-react";
const Card: React.FC<{
  title: string;
  children: React.ReactNode;
  action?: { label: string; onClick: () => void };
  className?: string;
}> = ({ title, children, action, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}
  >
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {action ? (
          <button
            onClick={action.onClick}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {action.label}
          </button>
        ) : (
          <button className="p-1 hover:bg-gray-100 rounded-md">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
    <div className="p-6">{children}</div>
  </div>
);
export default Card;
