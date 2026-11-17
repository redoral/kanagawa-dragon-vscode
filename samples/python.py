# Kanagawa Dragon — Python sample (semantic tokens via Pylance)
import os                                                 # import: preproc red
from pathlib import Path                                  # from: preproc red

MAX_SIZE: int = 4096                                      # constant: orange
_GRAVITY = 9.81                                           # number: pink


class Dragon:                                             # class: aqua
    """A docstring — italic ash like comments."""

    species = "kaidō"                                     # class member: yellow

    def __init__(self, name: str, age: int = 100):        # params: gray
        self.name = name                                  # self: builtin red italic
        self._scales: list[str] = []

    @property                                             # decorator: orange
    def scales(self) -> list[str]:
        return self._scales

    def breathe(self, fire: bool = True) -> str | None:   # bool: bold orange
        if fire and age_check(self):
            print(f"{self.name} breathes!")               # print: builtin teal
        else:
            raise ValueError("too cold")                  # raise: red bold


def age_check(dragon: Dragon) -> bool:                    # function: blue
    return dragon is not None and len(dragon.scales) > 0  # word operators: red bold


if __name__ == "__main__":
    d = Dragon("haku")
    print(d.scales, os.getcwd(), Path.home())             # Path: builtin teal
# FIXME: sample deprecated attribute below
