# Kanagawa Dragon — Python sample (semantic tokens via Pylance)
import os                                                 # import keyword: red
from pathlib import Path                                  # from: red
from typing_extensions import deprecated                  # used by the demo at the bottom

MAX_SIZE: int = 4096                                      # constant: orange
_GRAVITY = 9.81                                           # number: pink


class Dragon:                                             # class: aqua
    """A docstring — green italic (string)."""

    species = "kaidō"                                     # class attr: white (plain variable)

    def __init__(self, name: str, age: int = 100):        # params: white (incl. self)
        self.name = name                                  # self: red italic (attribute access)
        self._scales: list[str] = []

    @property                                             # decorator: aqua
    def scales(self) -> list[str]:                        # method: blue
        return self._scales

    def breathe(self, fire: bool = True) -> str | None:   # True: bold orange, bool: aqua
        if fire and age_check(self):
            print(f"{self.name} breathes!")               # print: builtin teal
        else:
            raise ValueError("too cold")                  # raise: red bold


def age_check(dragon: Dragon) -> bool:                    # function: blue
    return dragon is not None and len(dragon.scales) > 0  # word operators (is not / and): red bold


if __name__ == "__main__":
    d = Dragon("haku")
    print(d.scales, os.getcwd(), Path.home())             # Path: teal (defaultLibrary class)
# FIXME: deprecated usage below shows katanaGray strikethrough


@deprecated("use Dragon instead")
def make_dragon(name: str) -> Dragon:
    return Dragon(name)


make_dragon("kai")  # deprecated call: katanaGray strikethrough
