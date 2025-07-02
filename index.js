// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [vms, setVMs] = useState([
    { id: 1, region: 'US-East', usage: '75%', status: 'Running' },
    { id: 2, region: 'EU-West', usage: '40%', status: 'Idling' },
    { id: 3, region: 'Asia', usage: '90%', status: 'Terminated' },
  ]);

  const toggleStatus = (id) => {
    setVMs(vms.map(vm => {
      if (vm.id === id) {
        let newStatus;
        if (vm.status === 'Running') newStatus = 'Idling';
        else if (vm.status === 'Idling') newStatus = 'Terminated';
        else newStatus = 'Running';
        return { ...vm, status: newStatus };
      }
      return vm;
    }));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>VM Visualiser</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Region</th>
            <th>Resource Usage</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {vms.map(vm => (
            <tr key={vm.id}>
              <td>{vm.region}</td>
              <td>{vm.usage}</td>
              <td>{vm.status}</td>
              <td>
                <button onClick={() => toggleStatus(vm.id)}>Change</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
