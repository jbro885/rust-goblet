import React, { useEffect, useRef } from 'react';
import { useEngines } from '../stores/use_engines';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto'
    }
}

export function Greet() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { wasmEngine } = useEngines()

    useEffect(() => {
        let canvas: HTMLCanvasElement;
        if (wasmEngine.instance && canvasRef.current) {
            canvas = canvasRef.current;
            wasmEngine.instance.start_game(canvas, "Alex", "Angelica");
        }
    }, [canvasRef, wasmEngine])

    return (
        <div style={styles.container}>
            <canvas ref={canvasRef} width="600" height="800"></canvas>
        </div>
    );
}