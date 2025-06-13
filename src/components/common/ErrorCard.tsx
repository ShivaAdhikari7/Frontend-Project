import { AlertCircle } from "lucide-react";

interface ErrorCardProps {
  error: string;
  onRetry: () => void;
  loading?: boolean;
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  error,
  onRetry,
  loading = false,
}) => (
  <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-6 mt-4 mb-2">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <AlertCircle className="h-5 w-5 text-red-400" />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm text-red-700">{error}</p>
      </div>
      <div className="ml-auto pl-3">
        <button
          onClick={onRetry}
          disabled={loading}
          className="bg-red-100 text-red-800 px-3 py-1 cursor-pointer rounded text-sm hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Retrying..." : "Retry"}
        </button>
      </div>
    </div>
  </div>
);

export default ErrorCard;
