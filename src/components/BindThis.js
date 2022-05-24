import React from 'react'

export default function BindThis (self, methods) {
    return methods.map((method) => (
        self[method] = self[method].bind(self)
    ));
}
