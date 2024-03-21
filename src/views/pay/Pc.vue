<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'

const {proxy} = getCurrentInstance()
const pay_qrcode = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKCAIAAAD0S4FSAAAKsWlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUE+kWgP+Z9JDQAhGQEnqT3gJICaGFIkgHUQlJgFBCTEHAriyu4FpQEQF1RVdBFGxUsWHBwiJgrxtkEVDXxYINlTfAIezuO++98+45/9zv3Ln/LXPmn3MHALIGWyjMhJUByBJIRBEBPrS4+AQabghAgAKIwBgQ2ByxkBEeHgIQmdZ/lw93EW9EbllNxPr3+/9VVLg8MQcAKBzhZK6Yk4XwKWS95whFEgBQ1YjdcKlEOMGdCKuJkAIRlk1w6hS/n+DkSUbjJ32iIpgIawOAJ7HZolQASGaInZbDSUXikAIRthVw+QKEcxH2zMrK5iLcjLAZ4iNEeCI+PfkvcVL/FjNZHpPNTpXzVC+Tgvfli4WZ7Lz/83H8b8nKlE7nMEEWKU0UGIFopC7ofkZ2sJwFyfPCppnPnfSf5DRpYPQ0c8TMhGnmsn2D5Xsz54VMcwrfnyWPI2FFTTNP7Bc5zaLsCHmuFBGTMc1s0UxeaUa03J7GY8nj56dFxU5zDj9m3jSLMyKDZ3yYcrtIGiGvnycI8JnJ6y/vPUv8l375LPleSVpUoLx39kz9PAFjJqY4Tl4bl+frN+MTLfcXSnzkuYSZ4XJ/XmaA3C7OiZTvlSAv5MzecPkzTGcHhU8ziAQSIAVcwAfZgAZ8ES0GQpAJ2CBPwsuVTDTEzBbmifipaRIaAzlpPBpLwLGeQ7O3tXcEYOLcTr0W76iT5xGiXp+xrasBwKNlfHz89IwtqBuA40kAEBtmbGYLAVAeBOBqG0cqypmyoScuGORroATUgCbQBYbADFgBe+AM3IE38ANBIAxEgXiwCHBAGsgCIrAULAdrQCEoBlvADlAO9oL9oBocBSdAE2gDF8AVcAN0gzvgEZCBAfASjIAPYAyCIBxEhiiQJqQHGUOWkD1EhzwhPygEioDioSQoFRJAUmg5tA4qhkqgcmgfVAMdh1qgC9A1qAd6APVBw9Bb6AuMgkmwGqwDm8A2MB1mwMFwFLwQToWXwPlwAbwJLoOr4CNwI3wBvgHfgWXwS3gUBVAKKCpKH2WFoqOYqDBUAioFJUKtRBWhSlFVqDpUK6oDdQslQ71CfUZj0RQ0DW2FdkcHoqPRHPQS9Er0RnQ5uhrdiL6EvoXuQ4+gv2PIGG2MJcYNw8LEYVIxSzGFmFLMQUwD5jLmDmYA8wGLxVKxplgXbCA2HpuOXYbdiN2Nrceex/Zg+7GjOBxOE2eJ88CF4dg4Ca4Qtwt3BHcO14sbwH3CK+D18PZ4f3wCXoBfiy/FH8afxffiB/FjBGWCMcGNEEbgEvIImwkHCK2Em4QBwhhRhWhK9CBGEdOJa4hlxDriZeJj4jsFBQUDBVeF+Qp8hdUKZQrHFK4q9Cl8JqmSLEhMUiJJStpEOkQ6T3pAekcmk03I3uQEsoS8iVxDvkh+Sv6kSFG0VmQpchVXKVYoNir2Kr5WIigZKzGUFinlK5UqnVS6qfRKmaBsosxUZiuvVK5QblG+pzyqQlGxUwlTyVLZqHJY5ZrKkCpO1UTVT5WrWqC6X/Wiaj8FRTGkMCkcyjrKAcplyoAaVs1UjaWWrlasdlStS21EXVXdUT1GPVe9Qv2MuoyKoppQWdRM6mbqCepd6pdZOrMYs3izNsyqm9U766PGbA1vDZ5GkUa9xh2NL5o0TT/NDM2tmk2aT7TQWhZa87WWau3Ruqz1arbabPfZnNlFs0/MfqgNa1toR2gv096v3ak9qqOrE6Aj1Nmlc1HnlS5V11s3XXe77lndYT2KnqceX2+73jm9FzR1GoOWSSujXaKN6GvrB+pL9ffpd+mPGZgaRBusNag3eGJINKQbphhuN2w3HDHSMwo1Wm5Ua/TQmGBMN04z3mncYfzRxNQk1mS9SZPJkKmGKcs037TW9LEZ2czLbIlZldltc6w53TzDfLd5twVs4WSRZlFhcdMStnS25FvutuyZg5njOkcwp2rOPSuSFcMqx6rWqs+aah1ivda6yfq1jZFNgs1Wmw6b77ZOtpm2B2wf2anaBdmttWu1e2tvYc+xr7C/7UB28HdY5dDs8MbR0pHnuMfxvhPFKdRpvVO70zdnF2eRc53zsIuRS5JLpcs9uho9nL6RftUV4+rjusq1zfWzm7ObxO2E25/uVu4Z7ofdh+aazuXNPTC338PAg+2xz0PmSfNM8vzZU+al78X2qvJ65m3ozfU+6D3IMGekM44wXvvY+oh8Gnw+Mt2YK5jnfVG+Ab5Fvl1+qn7RfuV+T/0N/FP9a/1HApwClgWcD8QEBgduDbzH0mFxWDWskSCXoBVBl4JJwZHB5cHPQixCRCGtoXBoUOi20MfzjOcJ5jWFgTBW2LawJ+Gm4UvCT8/Hzg+fXzH/eYRdxPKIjkhK5OLIw5EfonyiNkc9ijaLlka3xyjFJMbUxHyM9Y0tiZXF2cStiLsRrxXPj29OwCXEJBxMGF3gt2DHgoFEp8TCxLsLTRfmLry2SGtR5qIzi5UWsxefTMIkxSYdTvrKDmNXsUeTWcmVySMcJmcn5yXXm7udO8zz4JXwBlM8UkpShlI9UrelDqd5pZWmveIz+eX8N+mB6XvTP2aEZRzKGM+MzazPwmclZbUIVAUZgkvZutm52T1CS2GhULbEbcmOJSOiYNFBMSReKG6WqCEDUqfUTPqDtC/HM6ci59PSmKUnc1VyBbmdeRZ5G/IG8/3zf1mGXsZZ1r5cf/ma5X0rGCv2rYRWJq9sX2W4qmDVwOqA1dVriGsy1vy61nZtydr362LXtRboFKwu6P8h4IfaQsVCUeG99e7r9/6I/pH/Y9cGhw27Nnwv4hZdL7YtLi3+upGz8fpPdj+V/TS+KWVT12bnzXu2YLcIttzd6rW1ukSlJL+kf1votsbttO1F29/vWLzjWqlj6d6dxJ3SnbKykLLmXUa7tuz6Wp5WfqfCp6K+UrtyQ+XH3dzdvXu899Tt1dlbvPfLz/yf7+8L2NdYZVJVuh+7P2f/8wMxBzp+of9Sc1DrYPHBb4cEh2TVEdWXalxqag5rH95cC9dKa4ePJB7pPup7tLnOqm5fPbW++Bg4Jj324njS8bsngk+0n6SfrDtlfKqygdJQ1Ag15jWONKU1yZrjm3taglraW91bG05bnz7Upt9WcUb9zOazxLMFZ8fP5Z8bPS88/+pC6oX+9sXtjy7GXbx9af6lrsvBl69e8b9ysYPRce6qx9W2a27XWq7TrzfdcL7R2OnU2fCr068NXc5djTddbjZ3u3a39sztOdvr1Xvhlu+tK7dZt2/cmXen52703fv3Eu/J7nPvDz3IfPDmYc7DsUerH2MeFz1RflL6VPtp1W/mv9XLnGVn+nz7Op9FPnvUz+l/+bv4968DBc/Jz0sH9QZrhuyH2ob9h7tfLHgx8FL4cuxV4R8qf1S+Nnt96k/vPztH4kYG3ojejL/d+E7z3aH3ju/bR8NHn37I+jD2seiT5qfqz/TPHV9ivwyOLf2K+1r2zfxb6/fg74/Hs8bHhWwRe3IUQCELTkkB4O0hAMjxAFCQGYK4YGqunhRo6l9gksB/4qnZe1KcAahD1MR4xDwPwDFkmawGQMkbgInRKMobwA4O8jU9A0/O6xOCRf5c6txUw2p2Pp1TA/4pU7P8X+r+pwbyqH/T/wLAAAzGDgh5SQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABSqADAAQAAAABAAABSgAAAAA5C8I2AAAgy0lEQVR4Ae2d+5ccxXXH+zUz+17tSiu0u1q9JfSyQJZFEJiHkG0QGHBy4mBO7JzEzrF/ieM4yck5/iG/5uQ/iI9jH8fmbYyxTzCJYxBwhG0gFsgGCQGSFoGkXS3Sat+vme7OvdWjdUY7Ks1uTW/VdH8HsbvT1XXr1uf2t291dfWMHYahhRcIgEASCThJ7BT6BAIgwAQgbxwHIJBYApB3YkOLjoEA5I1jAAQSSwDyTmxo0TEQgLxxDIBAYglA3okNLToGApA3jgEQSCwByDuxoUXHQADyxjEAAoklAHknNrToGAhA3jgGQCCxBCDvxIYWHQMByBvHAAgklgDkndjQomMgAHnjGACBxBKAvBMbWnQMBCBvHAMgkFgCkHdiQ4uOgQDkjWMABBJLAPJObGjRMRCAvHEMgEBiCUDeiQ0tOgYCkDeOARBILAHIO7GhRcdAAPLGMQACiSUAeSc2tOgYCEDeOAZAILEEIO/EhhYdAwHIG8cACCSWAOSd2NCiYyAAeeMYAIHEEoC8ExtadAwEIG8cAyCQWAKQd2JDi46BAOSNYwAEEksA8k5saNExEIC8cQyAQGIJQN6JDS06BgKeLgS2betqOqZ2wzBcsGUVGvJ2dVmWeyUHpeKz3LKuUhUaKj4je6vQQ10QMJoA5G10eOAcCKgQgLxV6KEuCBhNAPI2OjxwDgRUCEDeKvRQFwSMJgB5Gx0eOAcCKgQgbxV6qAsCRhOAvI0OD5wDARUCkLcKPdQFAaMJaFu1Jqeia5WP3CszV1PJvZKTlNeVl6qwknslt6xSV25ZpVSFlUq78rrI3nI+KAWBGiYAeddw8OA6CMgJQN5yPigFgRomAHnXcPDgOgjICUDecj4oBYEaJgB513Dw4DoIyAlA3nI+KAWBGiYAeddw8OA6CMgJQN5yPigFgRomYOiqNTnR+FYIxbciSsXn+LySc5a3q9IjebsqpfF5Jaeh4nN8dZG942MLyyCgmQDkrTkAaB4E4iMAecfHFpZBQDMByFtzANA8CMRHAPKOjy0sg4BmApC35gCgeRCIjwDkHR9bWAYBzQQgb80BQPMgEB8ByDs+trAMApoJ1OSqNc3MDGteZZ2WfCWW3LK8rmGQUuoOsndKA49up4EA5J2GKKOPKSUAeac08Oh2GghA3mmIMvqYUgKQd0oDj26ngQDknYYoo48pJQB5pzTw6HYaCEDeaYgy+phSApB3SgOPbqeBAFatGRFl+QowXavH5F7JwenyWe5V2kqRvdMWcfQ3RQQg7xQFG11NGwHIO20RR39TRADyTlGw0dW0EYC80xZx9DdFBCDvFAUbXU0bAcg7bRFHf1NEAPJOUbDR1bQRgLzTFnH0N0UEanLVmspqKjNjK1/jJfdZXjc+VvJ25T7HVxpff+PzOT7LyN7xsYVlENBMAPLWHAA0DwLxEYC842MLyyCgmQDkrTkAaB4E4iMAecfHFpZBQDMByFtzANA8CMRHAPKOjy0sg4BmApC35gCgeRCIjwDkHR9bWAYBzQQMXbVm5oqo+GIlX2slp1GLdVVIymmoWE5eXWTv5MUUPQKBIgHIG4cCCCSWAOSd2NCiYyAAeeMYAIHEEoC8ExtadAwEIG8cAyCQWAKQd2JDi46BAOSNYwAEEksA8k5saNExENC2ak2+1gqBSTMBHBvVij6yd7VIwg4IGEcA8jYuJHAIBKpFAPKuFknYAQHjCEDexoUEDoFAtQhA3tUiCTsgYBwByNu4kMAhEKgWAci7WiRhBwSMIwB5GxcSOAQC1SIAeVeLJOyAgHEEbF0rhOSfmCX3Sl5XF2O5z3KvdPVIxWd5j1RKddGQ+2wmK7nPyN5yPigFgRomAHnXcPDgOgjICUDecj4oBYEaJgB513Dw4DoIyAlA3nI+KAWBGiYAeddw8OA6CMgJQN5yPigFgRomAHnXcPDgOgjICUDecj4oBYEaJqBt1ZqZzOTrpeTrllTqymnosiz3Knk05P2NLwrydlVKkb1V6KEuCBhNAPI2OjxwDgRUCEDeKvRQFwSMJgB5Gx0eOAcCKgQgbxV6qAsCRhOAvI0OD5wDARUCkLcKPdQFAaMJaPuOMaOpGOac/A6zirPxWVbxCnWrRQDZu1okYQcEjCNgaPZWWSGkUlceH7lleV15aVnLtZJayzov76+8VG5QjkVeV96u3LK8rrxdFcvyduWlhspb7jRKLSsILcsOePAVOgEDCZ3QKtBGejMZTg4UBk6MHH/n4ju/G/7d2Zkz5/PnR8KxmXA6tELPzjS6TR1ex0qne0vLlq1Lt25s3XhNZnmj3ZQJxfFgR4BtyyZ79IPeh+KHzSXF0mgf/DSagKFrzlXOhfHVVYmk/Pxd1md5FVZe8UV/hlZgz1iF8/mB3w8f/nX/rw4P/f50/syENREEVuD4BdunswCplbTKPy36yf+80Guw65flOq5vum5P543Xt+1ckevMWlnHdizaQci7VNBlxF3W+Uu+lf8t75rcoErd8t5c2qrL8qX2q/8b8i5hKj+wSnad55sFHDqyKpSFSdMifYdBmLfzH8ycfqH/wIHTB45OvD3sDFskTxY9J13+LfIu5WDhNW3jzSGrl5K+44YutVUfNKyvX7+vc99nOj+ztn5txs7wWYD/RbVE1XK5ewHQZF0j5yJvowbn/FSpO8dYyQZdlkucqOobyLsEp/zAKtl1nm8WcOjIqogySseBVRjMDz7X/8JPe58+MnNk0pkg0YqBNI+sScQB/c/vWc80mheDd8rKNJKnt7Qn/ea3lMnpZEHb6vzcxsz6+1d97s7uuzozKzyLhusi3VuiStEQG5t9LQCarGvskPB2toHSP1Tqllq6/J0uy5f7Ub33kHcJS/mBVbLrPN8s4NCRVeGyYNqafnP06Pff+4+XBw+OOSMBCbAoadatkLcQbVHekWYiXXNaJt3yeD162b7DV/Jcjf5oDJo/3rrzyxv+clfbDQ1WvcMpnOVdVncLgCbrGuQ9z0NLsjvkXQJnAUdqSf0rv1nAAS2pEoTBeDj6fP9z33nvu+/m3yu4MwHpjxO2kKC4wBbZOBqc81ahY5I0CZi9FL9om5iW4wRPJwdPZPVA7Ou4vtdjdf3Vhq/cu+reJU5LNFCnely59LUAaJKukW25QZW6pY5f/k6X5cv9qN57yLuEpfzAKtl1nm8WcOjMVuFLaBIlZVC+iA7o5/ngwk8++OkPj/+gzzktkjbPm9EelNIt2xeDbYfei2tvyskkY6FuVnV0yU3eF4Uq8j2/IwP0j+bheEQfNRg61+RX/FnPA3++8cFl3lKahxOVyBTvecnAVdRYltNs18qWyqOgUrdsc7MbdVmedaDqf+DGWNWRVt8gZWa3KCaaRwuHg5Eneh//4cmHBu1BGlKz2KhNunImfdIftC9nY9azUHAxP9NbepEqi5vFW/GG9ySR89BeXH7ziYGq0gW5FX7knXvo9A8mwrGvbfpKh7siauL/SfuSFfw2kgBWrRkZllKnHJoH5/RLedUfD6efPvWzR3ofHXQG895MJGPanTJ2aaV5vwvtgmUVOC1TluZMTueFMHTyo+7Fp04/+cjxR4f9YSrloQGdS6LB/rwbQYVFJaAte6sMwOSEVIZY8rryduU9kteVl7KURCLOW4UXz734vZPf6/P6Ahql8xiaqooyuYmrlZIdceHN5wken/MtNO4QtRBY7nTo/+rDX+/t2Luj/XraSpv/MDTncwA7Ma9XfKwW4EyFnsstx9ejCt0ru5s2eZf1BhvLEoiul+mq+r3xE9979zt8vW1TJnfogptFWFQ5j9LLVq9kIw3IA7LEg3c2J84bNFx3MgV3qbfs1q7b7u+6d8OSTcUWaFcyqjpcqMQv7KNEAPJWwrdYlWntmT0cjjx08qGjM2/5Ht/EIg2SCIUDlDz5XrfI5Av0iM4XPi1VY2GLWTjbyvlel9N9e9dt+3vu3tK0qclpsi2PMphI6/xjgS2h2iISgLwXEfZCm6KBc2D5vzn/q+cHnpvxCqRBoS4eEguB8+TZJakvtA3LdgPHobOEbbmF3Bpv9a3dn7x75T2bmzbXWfUkelJ+IQxo0evw1OjqlpUZu85F+l4w7MWqCHkvFmmFdmhOfLAw+NNTP7toXaS/aU47cAriQRKaJKcrcFI7jaijwblYfEIDZ16ETlfRnNhpbzHsjjK8GHfz6YCWrfIFtzhT0DDfz/qUsbM92TV3rr5nX9feNY09jVaTG3qc2ENrPJx47eIrjx9/wp12v3XDP3XnVtFcu0KfUHUxCEDei0FZuY3wzeG3Dg29XvBYw3zPimeueSjtiOXiYluUzOlynHN7dLnuit1YybxAzRfjadsJXL7Q5nthdApgY15oNxVa1ubW7l99597uO1bn1tTbdbwDN2HNWP4Hk71Pn/rJM2ee7bP7G/MNr5z/7edWdntWRrlfMBAvAcg7Xr5VsT5hTR3se3nIGuSUzOoNONs6PHMe0ppwvlqma3OSIoua5sM4pVMp/0EZNtqNBt4uj72tgKqy/jnd216Qqc/XbWhcu79r/97OfT11a+qt7KVxPln3h8KRF/pffKz30SMTb01509TomDX2Yv9L+zo/lXPrqtI7GImPAOQdH9uqWT4z3Xfowv9abvFOGCmchtuUkCm7irUsfGlsWTRQ90m+dFOLymhATucBkjvtRLmadiPZ80Q7nx04uTtBrtVv2tJ47f71d916za3duS7PzolTAz066lNLU9b0O2NvP3bysefPHxi2h/0MGyfF03XBsaEjJ8dOLmtdWrUewlA8BCDveLhW1eqJ4Xc+LHzg01ObPFvOj3r6JET+gzRcoKy9sWFTl7fy0NChCWu84OZDzs8ZkiIJXGjSoRTPN7B5PO7SuaElaLquaQdNid+y/JblmY4MDQFI9TwbT7vxGaE/3/fM6WeffP+pU8HxgusHPErn2TUa1tMQ/yN/kNq6oXV3VXsJY9UnAHlXn2nVLR4ZfHPCnuRLZ9I3iY/zM188s3pJsb79idZdX9v418+dfvHh4w9/6J+ecfM00+7QXDgP1x2aEidxUl73Aq8lWLKjeec9q+6+sWP3cm958aFu1jRLn84bY8H4ocHDj5x45LXR34w5Y75b4DMCF1p0eqFLf0r8E97U4aHD1uqqdxQGq0xAm7zFDdQrdka+Bkhe94pGRYFKXblX8nZV6v5+5C0SluPwRTWpmQfaLDOSOl+J+67TN3qhwV7ywOovrG1e991j/35o8vUZJ88X4nwyoGtwnkprD5btbv3EPT337l52Q7vbRg9yc2WywEZ52O+HMycmTzz1/lM/P/vsOXuAhC0yNl0G0OU6NcVDAnpRHRqf9473indiC0/dX/5S4Xy5rfm8l3OWeyWvOx8vTNlXm7xNAVALfvSH/WIujIfPND3GwmbJkfBowsynouOj754YP7mr5bpb2m7p3Nn9+MlHnz377EVriKbgnMBrs5d+Yumu+7vv27V0V6vX5lo0x8Z6FTmb/mJ5DwWDL/UdfKj34bcnj3Lyj7RMZwhxHiFIYtRAv2kD/R8OzAzUArm0+wh518ARMJofJb0JrUXDZBJb9HB3dGntn/P7X+47+LHmrQ1W06b69d/c+vWbOm/+zcArg1ODnfXX7Om4cfuS7a3uEk98RBMnbTZAQuWJuXFr/OjY0R+99+MXLvAUWvSYihvQ7W4e/M+hQyMIuscWDIUX5xRhg3EEIG/jQjLXoelgmhTFt6hJkTZlbBYoDdHpijm6/02afOncS3+85r612fX0eFmLs2Rf+x1722+j5788uq1tUZ53o1k2rkfiFvVplN9f6H/m9H8+eeqJD/xTNIXGN9voGjugSXjagxfDzX1RATlAmX9uEbaYRgDyNi0iZfxx+APPeEhcHCOzzulvvhQXkueZs97p3tc/emPVytWZMENPdHKFwMvyvXHSI4uRLsH5xhidJugueRiMheOvDr726PHHD428NuaN0IIZujHOgwJxGqDK4oK9vIaFH2QLL9MJQN6mR4j8a3YbhwsX6R4Yp8ziiJnUFd0GJ03S3Lk/4U784uzzt3fuXeos5fvT9D+vYuEKQrTcTRZ6SKvQ8icmjz956sn/OvvfH9kDhQw/fMYfAsGDAr5dTicA+kdq51PK5a/ofBLkwtzlJXhvHgHI27yYzPGo3Wk/G/TR4JkEG811R1KNduRMTh/RZBWOjB4+NnzsprabSNCsS1Y5J3b6RfPu0adBDAYjB/pform3o1NvTru0Co2VTKNxthydPnhPqkHt8OK2Ob7wiJ2m9JZ7HXOKsME4ApC3cSGZ69Ca+jXHxo7NRDpm4XFaFjmZflEOZxlTXj4fXniu77nr2nY0hy08yKZ7ZlTEWiWx02LSqWMjv6NnQl4YOjhCk+ouq1dModM43Be3vqLpOl4TR0tZ6Wq/nLx5OECj/K7Grrl+YotpBPhUjZfhBHa0XyfWn7Cb4pYWZ1cxcmax8UBcXDDn3eDlgZfPTJ7hi+soz9Ov0MqHwfsz73//+He/9dt//tnFZy46Fwq07JQG4qx7tsDX5HzSILNkjTeILWWODW7KtrOFzLbWbewNXmYTQPY2Oz7Cu21tW1vc1mFn5NLnL7EIWWmlL1pzdnb63CvnX93Qs4Ee5+KcbVkj4fCrF159+MTDr4+9MeVO0YqUSNKlVSt9J4YMVku45PolOyutg/30EdAmb5UVQvK6nLCu/JLXvXI9LpFblteVl8q9WtuwbkvT5g/HP6DUyUNnvqIuay+cyY4f6Hthf/fdy5wlUzSFNn7yid7HDvT9ctAemsrM0D0voc/yd7zKWrxsI6V4L3B7Gnt2tH5stqgsFnmPylaZNSj/Q8WyrrryHsVXqk3e8XUpeZbpWwRuvuaTB989OO3SR6MWxNCc9H35WYxmvGgK/Y2xN759/Nu72z9+7OKxX/T/snemN58p0FIUuvwWw296KkSBEK04Lzi7u2/oyC5TsIKqi0QA8l4k0CrNuLZ3U8eN15689oh/tOCSvOnS2p0rUvFEmD1ujz96+pEfnflxEOSn6DNO6RMgitleLGaZXTm+IIdojn2F27lvxR05O7sgA6i0qATKTJ8savtorAICtBBtVf3qT6/8VI6WrPBz3fQhDXPVLUbuPEEW5O2pCXt02qFv82bJizzPH9JCf11pzqwCL3gX+gLwvcv3bWne7LEneJlOAPI2PULkHz3yQctI7ur59LX1m52QHuQmDdM3DYmHsMXUN2+h/3j4zWtdxJQ4zX6zsukHnQnEYhSakxB/VtZjfj6c1suIKwCyLew43Zme+9feTyvbxWK4ygxhL30EIG997CtumbI3pevVubVfXPfFpf4SIS2eYeO0TAta+P4Wr13je1tiAC7Wq5KSReJmZRf/oAaFXIVkr9Y6TeDZQSayGuX8pkLjA6s+v61hMx00/KkweBlPAPI2PkSsJfrP9qzc3uW339d5d64gFoTy+nD+CFTO7rzgbB6ZuaI+Fz+8iU4jfCsiE2b3te39k+7P5aycuFNOzeFlOgHI2/QIkX+cQnmFedDstnxp45dub72tvlAvPu6UUih/7imVizWkFaXlCjvMHwHBJw6yadf57u66j39181fbMh2k+uIa9QoNYTd9BCBvfewrb1lcNNP43LW8ldlVf7f1G3/UvKfOz/JDXbxonCRI02Y85Va5yQr2FA+e8vcQZT+Wve5vt31jY+O19GQp3X6jf3QdUIEF7KKZAOStOQCVNM/Jm8fh/L0BXpjd0LDp77d/c0/zzTm/wfGzdN+LL7PFWL0SaxXvw8P9bFB3fW7XP2z/x50tOzNWxuUbctG0PeRdMUh9O9K0jJ44qawfkuNSsSyvK29XTlJuWV6X5slFciYNs85JzL5VeHfq+Lff/rfnB58fc8f58pvLaJRetQROpuhLS/Y0ffLrW/9me/OWbJjlLnDSpsdX6FRD4i+2VbZr8h7JScpLyzYnr1JhqdxnlXbllit0bwG7Qd4l0OILodzy1cIfSfcPrtIHodI3fp0r9P/r0X/5+fn/CejzTOmpL0qr/D1h/GEq/IPUzimdlS9qsho5I7M6eUOkUf6LL93pP9qZilm3tPK0JWy5t/Ozf7H+y6vqeuhZcPrMNvGoqJC3qDP7o2zXrtaj2drz/qNsc/O2Uq6C3GeVduWWy/lSnW1YtVYdjjFbKd7vmm2FNJwJnHa3vcVrzQRenvXqer4YiYnnTkiPLmuYrsxJtPyiXVi4YiNtF+qOSljntIVs0nu6zUY3wLbUbXtw4wN3dOxtsZdQqbg64BOD0L/4jR+1QADyroUozfGR9ehYU8FM/9QAz69RMqchs/jGb7o25j954ptG67QuRSiak3KkT0rQpNZobiz6OBce1FPqpn/1Qd2GunV3rb17f+edXVn6GlD++gNxVhBjAv6reLKY4xE2mEgA8jYxKlf1SaThcKww+uHkh/S1JOLBbZJv4IX0scdtNAE2FAzPOOKTFHkdarSCTcy/k1ojpdPJgD5KmVaq0nePBO7SsH17y7Zbu2+9sWNPT11PLqxjHfNogEb8IrtH6b54iriqg9jBCAKQtxFhmL8TfEU9PD04OjPCD4ha9C2fbqPfeFPrngev/UKr23J08O3DFw4fHz85UBgY9ycLVj4f5n2akuMPVXNdx3Ntu8FqWOGtWF+/blvH9u3t21c3rG7jrzfI8shADMf5DMCe8YC+KPH5O4oaGglA3hrhqzTNl9LnJs9N5CfsrEPfVrDGXvWFdQ9+dtW9y71raOS9vWnHfT33jfkjgzNDFyYGh6dHRmdGp/xJqlXn1DVnm5rqmtrr2pfllrV6rTm7jtI+D9qja2shZyFovgggedNHtV3Sufit4jjqLiIByHsRYVevKRJg3vJPTr0/ZU2155fe3HbTg5s+v7Pl+jq7kXM5a9BrtJub3eYVDV1hA19AR8+OUSYW1+D8zFnphTRdf0dz7FSZp91nlU6y54E653O2C30zmxp5Qd41EqjL3ORJMfr6bWtDdv2frnvgs933tHv0JSSUgSNtX/rFGbk4pcaPg9LrSurk7aRi0vUVNXylqsIufphIAPe9S6IS371NuWVd90VLOr/QN2W7Fl+Pyja3UN9L6sl9VmlXbrnEiaq+QfaeB055kFTCX7auvLl5+B3zrmX9LNujmB25uvmyrl69mthDXtfM/uI2ZoXBxW4gUHsEkL3NjdlsQlDJG/K68s7POlB2NxXLZQ1iY9UJIHtXHSkMgoApBCBvUyIBP0Cg6gQg76ojhUEQMIUA5G1KJOAHCFSdAORddaQwCAKmEIC8TYkE/ACBqhOAvKuOFAZBwBQCuO9dEgn5vdy03QeW0ygBl4g3KvE1kxWydyIOTHQCBMoRgLzLUcE2EEgEAcg7EWFEJ0CgHAHIuxwVbAOBRBCAvBMRRnQCBMoRgLzLUcE2EEgEAcg7EWFEJ0CgHAHIuxwVbAOBRBCAvBMRRnQCBMoR0PZRiuWcSfI2lRVRKlzk7apYVqkb3xovlf7G55UKK5W6yN4q9FAXBIwmAHkbHR44BwIqBCBvFXqoCwJGE4C8jQ4PnAMBFQKQtwo91AUBowlA3kaHB86BgAoByFuFHuqCgNEEIG+jwwPnQECFAOStQg91QcBoAto+a01ldZGZROVrnuSl8h7JWckty0vlluVexWdZ7pW8XV0+q7Qrr6tSiuytQg91QcBoApC30eGBcyCgQgDyVqGHuiBgNAHI2+jwwDkQUCEAeavQQ10QMJoA5G10eOAcCKgQgLxV6KEuCBhNAPI2OjxwDgRUCEDeKvRQFwSMJqBt1ZqcisrKJLlllVL5aiq5ZZW6KjTia1fFspyVSn/lluU+y9uV15W3q6sU2VsXebQLArETgLxjR4wGQEAXAchbF3m0CwKxE4C8Y0eMBkBAFwHIWxd5tAsCsROAvGNHjAZAQBcByFsXebQLArETgLxjR4wGQEAXAchbF3m0CwKxEzB01Zq83/GtH5KvW5J7FV+pvL8qPsvryttV6W98luVeqfRXpa7cq/hKkb3jYwvLIKCZAOStOQBoHgTiIwB5x8cWlkFAMwHIW3MA0DwIxEcA8o6PLSyDgGYCkLfmAKB5EIiPAOQdH1tYBgHNBCBvzQFA8yAQHwHIOz62sAwCmgnU5Ko1zcxiaF6+IkqlQRXLKnXlPqusWpN7JbcsL43PZ7nl+EqRveNjC8sgoJkA5K05AGgeBOIjAHnHxxaWQUAzAchbcwDQPAjERwDyjo8tLIOAZgKQt+YAoHkQiI8A5B0fW1gGAc0EIG/NAUDzIBAfAcg7PrawDAKaCWDVmuYARM2rrKZS6YB8BZiKZXnd+NqVW1bhHJ9lOSuVUmRvFXqoCwJGE4C8jQ4PnAMBFQKQtwo91AUBowlA3kaHB86BgAoByFuFHuqCgNEEIG+jwwPnQECFAOStQg91QcBoApC30eGBcyCgQgDyVqGHuiBgNIGaXLUmXz9kJu/4fJavxFJpV8WyvG7aYqSrv8jeusijXRCInQDkHTtiNAACughA3rrIo10QiJ0A5B07YjQAAroIQN66yKNdEIidAOQdO2I0AAK6CEDeusijXRCInQDkHTtiNAACughA3rrIo10QiJ2AoavWanHNkzxW8h7J15bJ68rbVSmVeyW3rFJXV391tSsnqVKK7K1CD3VBwGgCkLfR4YFzIKBCAPJWoYe6IGA0Acjb6PDAORBQIQB5q9BDXRAwmgDkbXR44BwIqBCAvFXooS4IGE0A8jY6PHAOBFQIQN4q9FAXBIwmYKusLjK6Z3AOBFJPANk79YcAACSXAOSd3NiiZ6knAHmn/hAAgOQSgLyTG1v0LPUEIO/UHwIAkFwCkHdyY4uepZ4A5J36QwAAkksA8k5ubNGz1BOAvFN/CABAcglA3smNLXqWegKQd+oPAQBILgHIO7mxRc9STwDyTv0hAADJJQB5Jze26FnqCUDeqT8EACC5BCDv5MYWPUs9Acg79YcAACSXAOSd3NiiZ6knAHmn/hAAgOQSgLyTG1v0LPUEIO/UHwIAkFwCkHdyY4uepZ4A5J36QwAAkksA8k5ubNGz1BOAvFN/CABAcglA3smNLXqWegKQd+oPAQBILgHIO7mxRc9STwDyTv0hAADJJQB5Jze26FnqCUDeqT8EACC5BCDv5MYWPUs9Acg79YcAACSXAOSd3NiiZ6knAHmn/hAAgOQSgLyTG1v0LPUEIO/UHwIAkFwCkHdyY4uepZ4A5J36QwAAkkvg/wCuBRb1Oiw2ggAAAABJRU5ErkJggg==')
// onMounted(()=>{
//   proxy.$refs.pay_qrcode.showModal()
// })
</script>

<template>
  <div>
    <dialog id="success_dialog" ref="pay_dialog" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
            <i class="icon icon-close text-lg"></i>
          </button>
        </form>
        <h3 class="font-bold text-lg">支付成功</h3>
        <div class="form-control mt-4">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-24 h-24 fill-green-600/70">
              <path
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
            </svg>
          </div>
          <div class="flex flex-col items-center space-y-2 mt-8">
            <div class="font-bold text-xl font-bold">
              支付成功!
            </div>
            <div class="text-base-content/60">
              您已成功支付，感谢您的购买!
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex flex-col space-y-2">
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">已付金额:</span>
              <span>￥8.00</span>
            </div>
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">购买产品:</span>
              <span>购买8.00个金币</span>
            </div>
            <div class="flex flex-row space-x-2">
              <span class="text-base-content/30">订单编号:</span>
              <span>123412431234</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-8 space-x-10">
          <button class="btn btn-outline">
            返回首页
          </button>
          <button class="btn btn-neutral">
            我的定单
          </button>
        </div>
      </div>
    </dialog>
    <dialog id="pay_dialog" ref="pay_dialog" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
            <i class="icon icon-close text-lg"></i>
          </button>
        </form>
        <h3 class="font-bold text-lg">扫码支付</h3>
        <div class="form-control mt-4">
          <div class="flex justify-center items-center relative w-60 h-60 mx-auto">
            <div class="loading-box">
              <span class="loading-box-spinner"></span>
            </div>
            <img :src="pay_qrcode" class="w-60 h-60 shadow"/>
          </div>
          <div class="flex flex-row justify-center items-center space-x-2 mt-4">
            <div>
              <svg t="1710387304951" class="w-4 -h-4 fill-success" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M964.024495 639.989665A52.987774 52.987774 0 0 0 921.531884 694.001357V895.96925a25.597959 25.597959 0 0 1-25.597958 25.597959h-201.967893A52.987774 52.987774 0 0 0 639.95434 964.05982 51.195917 51.195917 0 0 0 691.150257 1023.959043h230.381627a102.391834 102.391834 0 0 0 102.391835-102.391834v-230.381627a51.195917 51.195917 0 0 0-59.899224-51.195917zM332.778837 921.567209H127.995169a25.597959 25.597959 0 0 1-25.597959-25.597959v-201.967893A52.987774 52.987774 0 0 0 59.904599 639.989665 51.195917 51.195917 0 0 0 0.005376 691.185582v230.381627a102.391834 102.391834 0 0 0 102.391834 102.391834h227.565852A52.987774 52.987774 0 0 0 383.974754 981.466432 51.195917 51.195917 0 0 0 332.778837 921.567209zM921.531884 0.040701h-227.565851A52.987774 52.987774 0 0 0 639.95434 42.533312 51.195917 51.195917 0 0 0 691.150257 102.432535h204.783669a25.597959 25.597959 0 0 1 25.597958 25.597959v201.967893A52.987774 52.987774 0 0 0 964.024495 384.010079 51.195917 51.195917 0 0 0 1023.923719 332.814162V102.432535a102.391834 102.391834 0 0 0-102.391835-102.391834zM59.904599 384.010079A52.987774 52.987774 0 0 0 102.39721 329.998387V128.030494a25.597959 25.597959 0 0 1 25.597959-25.597959h201.967893A52.987774 52.987774 0 0 0 383.974754 59.939924 51.195917 51.195917 0 0 0 332.778837 0.040701H102.39721a102.391834 102.391834 0 0 0-102.391834 102.391834v230.381627a51.195917 51.195917 0 0 0 59.899223 51.195917zM153.593127 511.999872a51.195917 51.195917 0 0 0 51.195918 51.195917h614.351005a51.195917 51.195917 0 0 0 0-102.391834H204.789045a51.195917 51.195917 0 0 0-51.195918 51.195917z"
                    p-id="4081"></path>
              </svg>
            </div>
            <div class="flex flex-row items-center space-x-2">
              <div>使用微信扫一扫支付</div>
              <div class="font-bold text-yellow-600">8.00元</div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-end mt-8">
          <button class="btn" onclick="success_dialog.showModal()">
            取消支付
          </button>
        </div>
      </div>
    </dialog>
    <dialog id="my_pay" class="modal bg-base-100 bg-opacity-0 backdrop-blur-sm">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2">
            <i class="icon icon-close text-lg"></i>
          </button>
        </form>
        <h3 class="font-bold text-lg">选择支付方式</h3>
        <div class="form-control divide-y divide-base-200 mt-4">
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M386.56 627.2c-5.12 2.56-10.24 5.12-15.36 5.12-12.8 0-23.04-7.68-28.16-17.92l-2.56-5.12-89.6-197.12c-2.56-2.56-2.56-2.56-2.56-5.12 0-7.68 7.68-17.92 17.92-17.92 5.12 0 7.68 2.56 10.24 2.56l104.96 76.8c7.68 5.12 17.92 7.68 28.16 7.68 5.12 0 10.24-2.56 17.92-2.56l501.76-222.72C834.56 145.92 688.64 76.8 522.24 76.8 248.32 76.8 25.6 261.12 25.6 488.96c0 122.88 66.56 235.52 171.52 309.76 7.68 5.12 15.36 15.36 15.36 25.6 0 5.12-2.56 7.68-2.56 10.24-7.68 30.72-20.48 79.36-23.04 81.92-2.56 5.12-2.56 7.68-2.56 12.8 0 7.68 7.68 17.92 17.92 17.92 5.12 0 7.68-2.56 10.24-2.56l110.08-61.44c7.68-5.12 17.92-7.68 28.16-7.68 5.12 0 10.24 2.56 15.36 2.56 51.2 15.36 104.96 23.04 161.28 23.04C801.28 901.12 1024 716.8 1024 488.96c0-69.12-20.48-133.12-56.32-189.44L389.12 624.64l-2.56 2.56z"
                    fill="#00C801" p-id="15823"></path>
              </svg>
              <span class="label-text">微信支付</span>
            </div>
            <input type="radio" name="radio-pay" class="radio" checked/>
          </label>
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4c-13.8 47.6-32.4 92.3-54.5 132.9-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z"
                    fill="#1296DB" p-id="17630"></path>
              </svg>
              <span class="label-text text-base-content/30">支付宝(维护中)</span>
            </div>
            <input type="radio" name="radio-pay" class="radio" disabled/>
          </label>
          <label class="label cursor-pointer py-4">
            <div class="flex flex-1 flex-row items-center space-x-2">
              <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M173.871355 444.23901v-3.050173c12.158912-51.560472 9.108738-105.878635 21.225867-160.656415 18.384609-109.095942 90.962032-209.124929 193.87406-254.41792s227.342406-30.292822 312.245873 39.40156c72.744556 60.627427 112.146116 157.648024 121.171288 251.618446a83.566405 83.566405 0 0 1-3.050174 27.284431c-3.008391 9.108738-12.117129 15.167303-18.175693 21.225867l-260.685401 209.166713c-9.108738 9.066955-21.225867 18.175693-33.426562 18.175693-18.217476 3.008391-36.393169-9.108738-54.568863-18.175693-39.40156-27.284431-81.853294-51.560472-121.171288-78.844904-12.117129-9.066955-27.284431-18.175693-42.451734-12.117129-3.008391 0-3.008391 3.050174 0 3.050174l197.049584 227.342406c9.066955 9.066955 18.175693 18.175693 30.292822 18.175693 9.108738 0 15.167303-6.058564 21.225867-12.117129l287.969832-284.961442h3.050174c54.568863 118.246463 112.146116 245.559882 109.137725 376.048824 0 3.050174 0 9.108738-3.050173 12.158912-6.058564 6.058564-15.167303 0-21.225867-6.100348l-69.694382-66.853124a2.966607 2.966607 0 0 0-3.050174 3.050174 299.042381 299.042381 0 0 1-90.920249 188.024412v3.00839c18.175693 3.050174 39.40156 9.108738 54.318163 21.225867s27.284431 36.393169 21.225867 54.568863a2.966607 2.966607 0 0 1-3.00839 3.050174h-618.391399c-6.058564 0-18.175693 3.008391-21.225867-6.058565 0-6.058564 6.058564-15.167303 9.108738-21.225867a80.683364 80.683364 0 0 1 15.125519-18.217476 107.299264 107.299264 0 0 1 39.443344-24.234258s15.125519-3.008391 18.175693-3.00839a2.966607 2.966607 0 0 0 3.00839-3.050174c0-27.284431-21.184084-45.460124-39.40156-66.853124a256.799563 256.799563 0 0 1-45.042292-91.045599c0-18.217476-6.058564-36.393169-18.175693-39.443343h-3.050174a320.560731 320.560731 0 0 1-51.518689 78.844903c-6.058564 6.058564-12.117129 9.066955-18.175693 6.058565a11.114332 11.114332 0 0 1-3.050174-9.108738 533.613281 533.613281 0 0 1 30.334605-239.459535c18.175693-48.510298 42.409951-93.970423 54.318164-142.480721z"
                    fill="#0BB2FF" p-id="3322"></path>
              </svg>
              <span class="label-text text-base-content/30">QQ支付(维护中)</span>
            </div>
            <input type="radio" name="radio-pay" class="radio" disabled/>
          </label>
        </div>
        <div class="flex flex-row justify-end">
          <button class="btn btn-primary" onclick="pay_dialog.showModal()">
            确认支付
          </button>
        </div>
      </div>
    </dialog>
    <div class="flex flex-wrap">
      <div class="pay-item">
        <div class="pay-shadow">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                  d="M160 112v48H288V112c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 96H48V416c0 26.5 21.5 48 48 48H352c26.5 0 48-21.5 48-48V208H336v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H160v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V208zm0-48V112C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48V416c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48h64z"/>
            </svg>
          </div>
          <div class="pay-label">
            普通充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent">原价</div>
            <div class="rounded-full bg-sky-100 text-xs py-1 px-2 text-primary font-bold">折扣 0%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">8.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥8.00
            </div>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得8.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn btn-primary flex flex-1" onclick="my_pay.showModal()">立即购买</button>
          </div>
        </div>
      </div>
      <div
          class="pay-item">
        <div class="pay-shadow border border-info relative">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                  d="M176 96c0-26.5 21.5-48 48-48s48 21.5 48 48v64H176V96zm-48 64H48 0v48V432v48H48 160V432H48V208H400v16h48V208 160H400 320V96c0-53-43-96-96-96s-96 43-96 96v64zm448 96H192V512H576V256zM320 336v16c0 35.3 28.7 64 64 64s64-28.7 64-64V336 320h32v16 16c0 53-43 96-96 96s-96-43-96-96V336 320h32v16z"/>
            </svg>
          </div>
          <div class="pay-label">
            豪华充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent line-through">32.00</div>
            <div class="rounded-full bg-yellow-100 text-xs py-1 px-2 text-green-600 font-bold">折扣 93%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">32.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥30.00
            </div>
          </div>
          <div class="pay-fire">
            <i class="icon icon-fire text-xl"></i>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得32.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn flex flex-1 bg-[#F19D38] text-base-100">立即购买</button>
          </div>
        </div>
      </div>
      <div class="pay-item">
        <div class="pay-shadow">
          <div class="flex justify-center">
            <svg class="w-14 h-14 pay-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                  d="M64 24C64 10.7 74.7 0 88 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H234.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H263.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H88C74.7 48 64 37.3 64 24zM225.6 240H523.2c10.9 0 20.4-7.3 23.2-17.8L584.7 80H195.1l30.5 160zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM24 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
            </svg>
          </div>
          <div class="pay-label">
            至尊充值
          </div>
          <div class="flex items-center space-x-2 justify-center mt-3">
            <div class="text-xs text-accent line-through">75.00</div>
            <div class="rounded-full bg-sky-100 text-xs py-1 px-2 text-primary font-bold">折扣 90%</div>
          </div>
          <div class="pay-info">
            <div class="flex items-center">
              <span class="pay-coin">75.00</span>
            </div>
            <div class="pay-info-split">/</div>
            <div class="pay-info-money">
              ￥68.00
            </div>
          </div>
          <div class="px-4">
            <div class="flex flex-row items-center space-x-2 text-base-content/40 mt-4">
              <i class="icon icon-check"></i>
              <span>购买获得75.00金币</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币可转赠他人</span>
            </div>
            <div class="flex flex-row items-center space-x-2 text-base-content/40">
              <i class="icon icon-check"></i>
              <span>金币永不清零</span>
            </div>
          </div>
          <div class="flex mt-4">
            <button class="pay-btn btn btn-primary flex flex-1" onclick="my_pay.showModal()">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pay-item {
  @apply mx-4 md:mx-0 lg:w-1/3 md:w-1/2 py-2 md:p-4 transition-transform duration-300;
  div.pay-info-split {
    @apply text-base-content/20;
  }

  div.pay-info-money {
    @apply flex items-end text-base-content/70 text-sm;
  }

  svg.pay-img {
    @apply fill-base-content/50;
  }

  span.pay-coin {
    @apply flex items-center;
  }

  div.pay-fire {
    @apply absolute right-4 top-4 text-[#F19D38];
  }

  &:hover {
    @apply scale-110 sm:-translate-y-px sm:translate-x-px;
    .pay-btn {
      @apply bg-base-100 text-primary;
    }

    div.pay-shadow {
      @apply bg-primary;
    }

    svg.pay-img {
      @apply fill-info;
    }

    span.pay-coin, div.pay-label, div.pay-info-money {
      @apply text-info;
    }
  }

  div.pay-shadow {
    @apply transition-all duration-300 ease-in-out cursor-pointer dark-bg opacity-95 shadow-md rounded-2xl px-4 py-10;
    div.pay-label {
      @apply flex justify-center mt-4 text-sm font-medium;
    }

    div.pay-info {
      @apply font-bold font-mono flex justify-center text-2xl mt-2;
    }

  }

}
</style>
