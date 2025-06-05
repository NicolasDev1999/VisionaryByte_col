'use client';
import { useState } from 'react';
import { db } from '../../firebase/firebaseClient';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sanitizeInput = (input: string) => input.replace(/<[^>]*>?/gm, '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: sanitizeInput(value) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                createdAt: Timestamp.now(),
            });
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
            console.error('❌ Error al enviar mensaje');
            alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-black bg-opacity-60 backdrop-blur-lg p-8 min-h-screen text-white">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-bold text-purple-400">Contáctanos</h2>
                <p className="text-lg text-purple-200">¿Tienes una idea o proyecto? Escríbenos, te responderemos pronto.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Tu teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 px-6 py-3 rounded-lg font-bold text-white hover:scale-105 transition duration-200"
                    >
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                </form>

                {success && (
                    <p className="text-blue-400 text-lg font-semibold animate-pulse">¡Mensaje enviado con éxito!</p>
                )}
            </div>
        </section>
    );
}
