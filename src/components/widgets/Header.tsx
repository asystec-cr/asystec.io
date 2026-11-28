'use client';

import { type KeyboardEvent, useRef, useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';

const getLinkTargetProps = (target?: string) => {
  const normalizedTarget = target === 'blank' ? '_blank' : target;

  return {
    target: normalizedTarget,
    rel: normalizedTarget === '_blank' ? 'noopener noreferrer' : undefined,
  };
};

const Header = () => {
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const ref = useRef(null);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen((open) => !open);
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  };

  const handleNavigationEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;

    const openIndex = isDropdownOpen.indexOf(true);
    if (openIndex !== -1) {
      const trigger = event.currentTarget.querySelector<HTMLButtonElement>(
        `button[aria-controls="header-dropdown-${openIndex}"]`,
      );
      if (trigger?.offsetParent) {
        event.preventDefault();
        handleCloseDropdownOnClick(openIndex);
        trigger.focus();
        return;
      }
    }

    const menu = event.currentTarget.querySelector<HTMLButtonElement>('button[aria-controls="primary-navigation"]');
    if (isToggleMenuOpen && menu?.offsetParent) {
      event.preventDefault();
      handleToggleMenuOnClick();
      menu.focus();
    }
  };

  useOnClickOutside(ref, () => {
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  });

  const renderHeaderActions = (onClick?: () => void) => (
    <div className="flex w-full items-center justify-between lg:w-auto lg:gap-2">
      {showToggleTheme && <ToggleDarkMode />}
      {showRssFeed && (
        <Link
          className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          aria-label="RSS Feed"
          href=""
        >
          <IconRss className="h-5 w-5" />
        </Link>
      )}
      {actions && actions.length > 0 && (
        <div className="ml-3 flex shrink-0 justify-end rtl:ml-0 rtl:mr-3">
          {actions.map((callToAction, index) => (
            <CTA
              key={`item-action-${index}`}
              callToAction={callToAction as CallToActionType}
              onClick={onClick}
              linkClass="btn btn-primary m-1 min-h-11 whitespace-nowrap px-4 py-2 text-sm font-semibold shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xl:px-5"
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 lg:bg-white/90 lg:backdrop-blur-sm dark:lg:bg-slate-900/90 ${
        isSticky ? 'sticky' : 'relative'
      } ${isToggleMenuOpen ? 'h-[100dvh] lg:h-auto' : 'h-auto'}`}
      id="header"
      onKeyDown={handleNavigationEscape}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col lg:h-auto lg:min-w-0 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-4 lg:py-3.5">
        <div
          className={`flex shrink-0 justify-between py-3 px-3 lg:py-0 lg:px-0 ${
            isToggleMenuOpen
              ? 'lg:bg-transparent lg:dark:bg-transparent lg:border-none bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600'
              : ''
          }`}
        >
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
          <div className="flex items-center lg:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        {isToggleMenuOpen && (
          <div className="shrink-0 border-b border-gray-200 bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-900 lg:hidden">
            {renderHeaderActions(handleToggleMenuOnClick)}
          </div>
        )}
        <nav
          id="primary-navigation"
          className={`${isToggleMenuOpen ? 'block min-h-0 flex-1 px-3' : 'hidden'} lg:w-full ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } w-auto overflow-y-auto dark:text-slate-200 lg:mx-3 lg:flex lg:h-auto lg:min-w-0 lg:flex-1 lg:items-center lg:overflow-visible xl:mx-4`}
          aria-label="Navegación principal"
        >
          <ul
            ref={ref}
            className="mt-2 mb-36 flex w-full flex-col text-xl lg:m-0 lg:min-w-0 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-y-1 lg:self-center lg:pt-0 lg:text-sm 2xl:text-base"
          >
            {links &&
              links.map(({ label, href, icon: Icon, target: target, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown lg:shrink-0' : 'lg:shrink-0'}>
                  {links && links.length ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center whitespace-nowrap px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:text-white lg:px-2 lg:py-2 xl:px-3 2xl:px-4"
                        aria-expanded={isDropdownOpen[index]}
                        aria-controls={`header-dropdown-${index}`}
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label}{' '}
                        {Icon && (
                          <Icon
                            className={`${
                              isDropdownOpen[index] ? 'rotate-180' : ''
                            } ml-0.5 rtl:ml-0 rtl:mr-0.5 h-3.5 w-3.5`}
                          />
                        )}
                      </button>
                      <ul
                        id={`header-dropdown-${index}`}
                        className={`${
                          isDropdownOpen[index] ? 'block' : 'hidden'
                        } rounded pl-4 font-medium drop-shadow-xl lg:absolute lg:max-h-[65vh] lg:overflow-y-auto lg:min-w-[200px] lg:bg-white/90 lg:pl-0 lg:backdrop-blur-md dark:lg:bg-slate-900/90 lg:border lg:border-gray-200 lg:dark:border-slate-700`}
                      >
                        {links.map(({ label: label2, target: target, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block py-2 px-5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 first:rounded-t last:rounded-b dark:hover:bg-gray-700 lg:hover:bg-gray-200"
                              href={href2 as string}
                              {...getLinkTargetProps(target)}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center whitespace-nowrap px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:hover:text-white lg:px-2 lg:py-2 xl:px-3 2xl:px-4"
                      href={href as string}
                      {...getLinkTargetProps(target)}
                      onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div className="hidden lg:flex lg:w-auto lg:shrink-0 lg:self-center">{renderHeaderActions()}</div>
      </div>
    </header>
  );
};

export default Header;
