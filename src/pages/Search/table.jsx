function Table({ data }) {
  return (
    <table style={{ width: 700 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td style={{ textAlign: "center" }}>{item.price}</td>
            <td style={{ textAlign: "center" }}>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
