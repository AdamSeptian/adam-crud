export const TableSkeleton = () => {
    return (
        <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr className="bg-base-200">
              <th className="py-3 px-6"><div className="skeleton h-6 w-6"></div></th>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td className="flex justify-start gap-2">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th className="py-3 px-6"><div className="skeleton h-6 w-6"></div></th>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td className="flex justify-start gap-2">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th className="py-3 px-6"><div className="skeleton h-6 w-6"></div></th>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td className="flex justify-start gap-2">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th className="py-3 px-6"><div className="skeleton h-6 w-6"></div></th>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td className="flex justify-start gap-2">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
              </td>
            </tr>
            <tr className="bg-base-200">
              <th className="py-3 px-6"><div className="skeleton h-6 w-6"></div></th>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td><div className="skeleton h-6 w-36"></div></td>
              <td className="flex justify-start gap-2">
              <div className="skeleton h-10 w-24"></div>
              <div className="skeleton h-10 w-24"></div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    )
}