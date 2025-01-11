import React, { useMemo } from "react"

export interface DataItem {
    id: string
    [key: string]: any
}

interface Column {
    key: string
    label: string
    render?: (value: any, item: DataItem) => React.ReactNode
}

interface GridProps {
    data: DataItem[]
    columns: Column[]
    rowStyle: (item: DataItem) => {}
}

const DataGrid: React.FC<GridProps> = React.memo(({ data, columns, rowStyle }) => {
    const columnsMemo = useMemo(() => columns, [columns])
    const dataMemo = useMemo(() => data, [data])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {columnsMemo.map((column) => (
                            <th key={column.key} className="py-2 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataMemo.map((item) => {
                        const rowStyles = rowStyle ? rowStyle(item) : ''
                        return (
                            <tr key={item.id} className="hover:bg-gray-50" style={{ ...rowStyles }}>
                                {columnsMemo.map((column) => {
                                    const value = item[column.key]
                                    return (
                                        <td key={column.key} className="py-2 text-left px-4 text-sm text-gray-600 border-b">
                                            {column.render ? column.render(value, item) : value}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
})

export default DataGrid
