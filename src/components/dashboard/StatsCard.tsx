interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  iconColor: string;
  iconBgColor: string;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBgColor,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 ${iconBgColor} rounded-lg`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
    </div>
  </div>
);

export default StatCard;
