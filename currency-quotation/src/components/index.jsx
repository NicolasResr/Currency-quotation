import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import './CryptoList.css';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    useEffect(() => {
        api.get('/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 50, // Traz 50 criptomoedas
                page: 1,
            },
        })
        .then((response) => {
            setCryptos(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Erro ao carregar dados', error);
            setLoading(false);
        });
    }, []);

    const sortData = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedCryptos = [...cryptos].sort((a, b) => {
            if (key === 'name') {
                return direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else {
                return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
            }
        });

        setCryptos(sortedCryptos);
        setSortConfig({ key, direction });
    };

    const renderSortButton = (key) => {
        const isActive = sortConfig.key === key;
        const direction = isActive ? sortConfig.direction : null;
        return (
            <button
                onClick={() => sortData(key)}
                className="sort-button"
                title="Ordenar"
            >
                {direction === 'asc' ? '↑' : direction === 'desc' ? '↓' : '↕'}
            </button>
        );
    };

    if (loading) {
        return <div className="container">Carregando...</div>;
    }

    return (
        <div className="crypto-container">
            <div className="crypto-header">
                <h1 className="crypto-title">Mercado de Criptomoedas</h1>
            </div>
            <div className="crypto-table-wrapper">
                <table className="crypto-table">
                    <thead>
                        <tr>
                            <th>
                                Moeda {renderSortButton('name')}
                            </th>
                            <th>
                                Preço {renderSortButton('current_price')}
                            </th>
                            <th>
                                Variação 24h {renderSortButton('price_change_percentage_24h')}
                            </th>
                            <th>
                                Volume 24h {renderSortButton('total_volume')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptos.map((crypto) => (
                            <tr key={crypto.id}>
                                <td className="crypto-name">
                                    <img src={crypto.image} alt={crypto.name} className="crypto-logo" />
                                    <span className="crypto-symbol">{crypto.name} ({crypto.symbol.toUpperCase()})</span>
                                </td>
                                <td className="crypto-price">${crypto.current_price.toFixed(2)}</td>
                                <td className={`crypto-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                                    {crypto.price_change_percentage_24h.toFixed(2)}%
                                </td>
                                <td className="crypto-volume">${crypto.total_volume.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CryptoList;
