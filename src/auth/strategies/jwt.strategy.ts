import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Request } from 'express';

interface JwtPayload {
  sub: string;
  email: string;
}

type JwtStrategyConfig = {
  jwtFromRequest: (request: Request) => string | null;
  ignoreExpiration: boolean;
  secretOrKey: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const config: JwtStrategyConfig = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as (request: Request) => string | null,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your_jwt_secret_key',
    };
    super(config as StrategyOptions);
  }

  validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email };
  }
}
