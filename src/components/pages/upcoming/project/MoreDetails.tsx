export default function MoreDetails({ name }: { name: string }) {
  return (
    <section className="bg-green-50 px-3 py-10 md:px-10 md:py-12 lg:px-44 lg:py-16">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">More Details</h2>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className=" min-w-full leading-normal">
              <thead className="bg-lime-100">
                <tr>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    Project Name
                  </th>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    Floor Location
                  </th>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    Shop
                  </th>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    flat
                  </th>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    Actual Size
                  </th>
                  <th className="border-2 border-gray-200 px-5 py-3 text-left text-lg font-bold tracking-wider text-gray-700">
                    Gross Size
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900">{name}</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Semi Basement
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">16</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 77-125 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 100-150 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Ground Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">30</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 80- 100 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 100-130 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      1st Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">40</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 80- 100 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Shop 100-130 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      2nd Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">6</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      950-1050 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      1250-1350 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      3rd Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">6</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      950-1050 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      1250-1350 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      4th Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">6</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      950-1050 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      1250-1350 sft
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm font-bold">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      5th Floor
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900" />
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">6</p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      950-1050 sft
                    </p>
                  </td>
                  <td className="border border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      1250-1350 sft
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
