import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return NextResponse.json({ message: "User already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword },
    });

    return NextResponse.json({
        message: "Usuario creado",
        user: { id: user.id, name: user.name, email: user.email }
    }, { status: 201 });
    
}

