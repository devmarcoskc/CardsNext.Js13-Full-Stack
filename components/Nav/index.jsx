"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">
          CardsForYou
        </p>
      </Link>

      {/*DESKTOP NAV*/}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="default_btn">
              Criar Post
            </Link>

            <button 
              type="button" 
              onClick={signOut}
              className="default_btn"
            >
              Sair
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                height={37}
                width={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ): (
          <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button 
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="default_btn"
              >
                Entrar
              </button>
            ))
          }
          </>
        )}
      </div>

      {/*Mobile Nav*/}
      <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                height={37}
                width={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Meu Perfil
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Criar Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut()
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div> 
          ): (
            <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button 
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="default_btn"
                >
                  Entrar
                </button>
              ))
            }
            </>
          )}
      </div>
    </nav> 
  )
}

export default Nav