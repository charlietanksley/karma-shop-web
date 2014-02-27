/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    var jpg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNjUK/9sAQwALCAgKCAcLCgkKDQwLDREcEhEPDxEiGRoUHCkkKyooJCcnLTJANy0wPTAnJzhMOT1DRUhJSCs2T1VORlRAR0hF/9sAQwEMDQ0RDxEhEhIhRS4nLkVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVF/8AAEQgBLADIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A7eilpKAEpre3WnGmmgCEvkH1FAYGorjK/OPxqmt0BJgNz6UAaHWmmo45w/TvTycigBB96rC9Krr96rA6UALQ3SgUNQAynLTO9OBoAkFIx5pRTTQAxzxUO7mpXNQ0AI5NVmPNWSeKrvigBAcU1z8ppM0yQ8UAEPL1ejqjD1q8nSgAY80UrCigDQzSUUUABppp1NbpQBWuDtQ57c/WuA1OfVFv3ewtZZIkJ4Vc1305yOalt4Y7eBQBjPOaAOB07xNJFOItQheByeN4IFdhDcrJGCpBBqXUtLtNVgaK5iRsjhsciuWsvtGiXZ067bdC3+pk9R6fWgDq4zk1ZHSsuCYso5wehq7HPk7WGDQBYpCaQnpSE0ANJpy0w0KeaAJxSGkBoJoAic1GakeozQAxulV2NWHqs55oASo5DxTmPFQueKAHw9a0I+lZ8B5rQj6UASN0opGPFFAF2jNIaSgBTTGOAadTGNAERAdwKZLKwl2gHbTgp3Ej+Gq5kO45zn160AWkkxway9asEvodvR1+ZG9DWij5wDzTpVDoe9AHMades6lJBtmQ7WHuK1llDODnGRmue1uCWyuVvoQflYLIo7j1q5aagk9vvUg7QG/CgDoY5d0XPUGnl8gDv3rLhuhg8+n+f1qX7Su9ueR0oA0CeaAearCYMTz0605ZgSPegC2ppGOKYHGRQzZFAAxqPdyajeUEjnioi+4nFAEzEYqs/BqbIxVeRhQAmcioJWxTjIFGSQPrVC7vUUcH8upoA0LZgTWkhGOK56xkd25O0eg5NbMbYAGck0AWWaimduaKANCikooARulRlxnBp5NV5+xHBHegCcHZbu394gCs1r5YJNsi5B9qtfakjtfnwcn8qpzQx3CexGQw7UAWEmjl5icf7rVKjA8NwfQ1kPaMu1h8xHQr1pr3F1bnJPmxdQGHIoAm1JV+YMuVI5FcDcXT6HeFGyYJPun09q6691BJYckkEdR6VzespFqNjLFuHmABlzQBSfxK6lPLbjiiDxPKJCzE5NcyI2UDJ5FPgiMkpz0UZoA7SLxeNzk8bqv2vieEldzc46V57IuBkE7c0iSMpB3HigD2O21FZlB3DOMmpvtqSgKrA4HNeTwatdxRFBI2DV2y8QzQAAksD1oA9FluFDdc+wp0bYG5zjNczpuspcHLEBh69qvvqiA8DJ7An9TQBryXWFOzAUdz0rMmvdpLs3Hb3rD1LxFHG2xWMrDoq96gttK1jXJA87/ZLU9j97H0oAl1HxJDCdkbb39BWNJrGoSZeK2cg99p4Fdvp/hnS9PAbyRNJ3aTmtCSSNF2qqhfQUAcTofiCSS5Fu8bCU8KpGPxNegWseIwSeT1PrWCbO3k1FJ1jUSDuvU10ELHbQBKx4opjGigDRppNGaaxwKAEc8HnFU7ibCHkH8afO4Knk49q5HWr9lcRLI5557YHrQB0rbDppkfvzUGnTI6YRsqKS5MSaJFB5m8bfvZ61h6TffZLowuxIzw3tQB0su2NmU/L3BqvNMpTa9Mubngng8dKwrm+IDbWG30PagCtqzIGG5yvbIrm7x2QHY5wRjrU2p3TOME/hWP5zOpUk5oArSSFGx3rQsoWaIueMjFVRCryruOMnmtG7dbeFRGcjBoAhkgKBBjINV5omADYwMVYhlY7N4ODz+dOeVbifavIXigCozbYADkZqFZCnC/WpNRfbLtHao413LmgCeLUpLZsxfePFamn2uqa04AJjjPVzxxUmnR6dAkZaFXmAyWb1rct7/LBYyMewwKANHStAsdMG8gyzY5dhzWv5wUcjavbtVC2mCj5iGI7VZ892wAmB2O0n+lADnuFC/ez9Bms+e8QnH7059quyAFMvuP5AVnyyDcAqgc0AT2S+bL8uQD610ESbUFZlhGQAx71qg/LQAxzRTZDxRQBoVHK+1cinM2BVOe42qeD+FAGTq+rraoSUJHtXHC9/tK4d1+Xb0BrV8QyyzoyiTj0AFYNhbNE+WU/WgDZju51tsSE7AMAD+dVkYh8scnr7ipXkUoFB6cYNZUzSSyiNVAI7igDoG1EMgUt8wHDZ61nz3CsrMD1HIqqoeNcSMSw9ai5dmbsOuaAKF0Ocv07VnAlGP5GtOdWuHIUDjpzWbdIYWw2R9aAK07SbwxyPQ1qOwlskfucCn3diG0hJlHzLxVGGf/AENUB5GT+tAE7MM554wP0pbEAvJMTtVc4NVGmLPtGBkjJ9KZLOdgt4uV7470ANvJVlmLKT+NPR/lBY4x2FVwu18OvPoae+SMk/hQBoQ5kPymt3To3TALYJ7Vz1o2AMcseTXU6U6kjfjHqKANWCSQDKkgdzT5dVmjIEazSH64FXY2g2YUZOPqBSSKhXDyYGM4oAz1lvbph5p8teyg5NaEVoYl3vkn3NRR3SI4WFQM8Z6k1Ld3PESL8zHrQBp2g+UVczxVCz3FRuNXjgLQBFI1FMk5FFAF+Ug8ZGapTjCEghvarky7h2zWTdyOikYYH25oA5rUpomnYck+gHSqO5FIO8cdBUGqtMLs+aDz0PrVcj93k54oAtDfM2QABUqmFVBJXepwfWsF9XngZhFkVRe4nmYyjJ7nBoA6yTa2csDTXsppotsQAz39aw7K/lEgSUOfcLmuqTWF021Ek1q7blyGKjBoAg0bQ5ndo5sYPQY61geJrV7e+8kqVweMiunt/G8sLCWTSpvJHU9h+lb8mm6b41hhvbYjeB8yjhh7GgDlm08J4Zxkk4HX1rmotPdUIIGfevQdYsTYiOyXJVea565s3YsVA70AcpcQGGEkght1WrOyFvbG8nB4Hyitd9PEpxNyA3T1qDxFN5dlHAi7VwKAOdkl8yVmA61JGpbqQcdMDrV/S9Ge7gM54T25NQ3YS3kCYOF7UAJasVY9K3rNyoC7uPTFYqAMQ+ML9auR3QQ8EcelAHY2rjYAAeOnrSXVykK4bGT0Gc1grrEaRgNknHA6imRvPqMmV4U96AN3Tpt7PJnCD+KqHmz6lqLNC22NTgEnFWZxHp+kOfNUyMMDkcmsbTC28bA5GeeetAHd6dB5UY3SFvxrRbpWXpjERjOfxrRJJoAa3SimSEgUUAaLnArLvZdgJ6fStKRsLWPeOGBBIX2NAHP6vFDeJnOHHcVgPpVyoDRPvQ1r3svkzcDI9qIr5QpJQn1BH9aAMg6K8qbiuGHrSi3ighKhCu4cnHGa13v4yu5eR3XvVC+uFliJt/lHfJoA0/CBhknCuqu6nnPpWl4nMY8S2EEyDyAN+w8AkVyGlXLQXoZG2vnIyetdprVnL4l06C+s1IurYYIPf2oAxte1xoLlY7VIoi+SNykjjsMDqelbvgkC18RskahI7uDcyDoHBHT865UalBFIBfWxE8fQFc4+lavg7UptQ8WwFYmjhjRgCRjJOP8ACgDrPFtoovkkA5K1yU6jeWxgZzXbeJmD3XTgAA1xd+oK5VcEHJoAZp+myancLDEeOpPoK3NT8H2NysP2tgqxAZ5xmtDQYItK0Zry4+QkF2LdhXEarfXHiO7lmuZJI7SNtscSnGfrQBuXOnafDafZ7KWMIOu1xk/WuJvtDd5yykYJz1zn6Usun2iXEkVvPLb3sR5GTwfQ5qezvLxreRbtA4j43gYoAzmtGjUKRyPXpUTxyBS2R+laIYSlgwz9agmUlSCBjpigChFcsBs2jnrV63mlAO3AGPzqn5Plvk/XgVZQZTJJwRQAk07zMollyB0XNaOnOBIADxWUYxu284Hc1csB+/AzQB6BprZjFaWRisjSg3lDmtYDigCOU/KaKZMeKKAL87EJWPdscEk8Vp3DHFZc8gAO5D+eaAOW1GRfMIxv9qWxaE4U7kz+Io1AwecScjHbb/8AXptq0G8FWJPoM/4UAXHsYLgYwOvBU4xSjRR5eMBgR1U81et442UMhxn/AGga04bTeo+cc9iOaAOCn0y4sb1W2kxZ4YjpXX6Dq8mmvmUHy2xnjIatNbDeSkqhvr/jWTqDR6SN/wA2Af7vSgDqr2TRdU0uW4MEQcDnKjIrhdMvrSx1+3jtGZjkkj0PpUhll1WFmsSCv8QX19xVTSrD7JdlmjAlzhmPagDstRnNyrSNxmsNVje5iVvusR2960bqRZIlBIxjmsPUbryp0ZCBxgGgCfx3rn7hdPtGIAxvK9q5ewvzPcSibCtK+8jryef60aRKup6k8N6u53mHzZ7c8V6Fe/D/AEm4iEiSC3JXkg8frQB5obI29/PcPICGYkHqTXV6RpiSaHctefL9o5VTwcCrqeGtI0xzJc3HnunRS1Y2v+I2mUR237mFeFXAoA5S/t3spmW3nYpnhe9UftE6HBYg+9WGkeSU4JJJ71be1MsAHBboDQBUgmeUcn5qsxt+B9xiqHltA+GYVIZGI27wR9aALu0M2c5rQ0yPMwyDWRCGb7x49jW/pEZEgPJFAHZ6chWMVoE1TskAjBBP51YcmgCGY8GimSniigC5cHbyWArHvHjwT5vPsK1bllIO5fxrCv4S4OGH4UAYd5dQq54dz65ArPe7fOf32O3z/wBMVYmtnaY8g+tPS2UnEMZkkHXHQfj/AJ+tAFjT9YIKxyB1PQEmumtLtGAMjKB/tN/SuTFvGflnlAJ/hi9Pc/8A66vWUkVtII7aFnB53MSf06fnQB1MF3iTMUodR2VScVseRb3dud8KShvvow61zKX0TRhGlLEdUjxitXSdR8t/L+Xaei7smgCPT/DSQXhltMrEx3EfdZfb3Fc/4iZ9H1llaN1Rvuvjhq9EjnUH5jj0rH8YW9tq2izRNhZ1XdG5HcUAcTJqqC23LLg9cN3rH+1PqdyAhGAwB9qZoeh6l4huDFxHboSHlJxj2HrXoWl+DNO0WPcjM0xH325H+eKAOKk07+zr7zkmjVmO4Lu5rU+3z+W+LiRsjGN+RVzVfD9veXQa5uGwDuTCYwPTNU/7FGnpuhuJJCeNsg6igDFvdSli5ZgwPGSM/n1rAkM1zMSV6+1di+lib/WBSfTpUf8AZKIMMu3HGcUAcytsYIwWCg+9SrJvYE4x9KvXulRKSTcqv41nta7c7JstjjNAE91bwOm5kXjvnmsvyl8z5Y8D6miXzFOGcL7c1LBtJGSM+1AFmKIKvb863tH+8M8isbA2jHNb2ioODQB1VqQEGKmc8VBDgLTy+aAIJjxRUc5xRQBenZcEMKyLqJTkhtq+nrVma9R1yPwrMnuSx45Y9+woAzNQVEwZQUXPCr3+tU5LuWZAkZCp0Cjgf/Xq/dQeauWyf61WgsjuYZ28d+cUAVNrZwZgqjqw5yaVtRmci2tgRH/Fjq31NPurKRkxGNoPb0H+efyqm6vaxbM/O/LEDtQBbS6MTeXErA/xSE4A+lamn6v5JCqrHnliOtc9DfqvytwB6itS3njlXl1x67aAPU9Lmi1LTV34DDg81R1bR7mSF/JuGwR2rjIdXltXTZKVHRRXcW3iO1uII0WRQ+OQTQBhaXYXOmDa0O4E53KMEVtxajtXYxZeP4uKku9RhjiViR1rC1TVY2tyYRuz+lAGlPfwKD82T0xjOa5u+1JixYElD6jj8arC4eaNi5wRyv1H+Iqa3voJLfdtHIyR7f5zQAxb+ZhmOJRg4w3I/wDrUyXUJJBtlUJ2yKU38UGHh2lGHy4HX1FUp9Rgu42aIDf3U9aAKlzZoeDISW5BFY07SQtsZcejetWZr3ywyrlkzyh6qaqtKZgM/Mp6Z60ARDMnofY04J82R8ppkkTg5UHHcinRKzN1oAuxhnGP1FdDpA8sDJrCtl2c8Gtm1lwnHFAHTxXCBeTQ9wgPBrG8wgDmnmTLAA0AW5p8nGaKqZy3NFAFCadiSM/lUQzJ0Yg/WoZ5fmGBUazFTkGgC21u7gA7h75qWGA+XtLkhjycdAKbBcu+AMEGp5JTbsS/ZfXjn/8AXQBW+1kOy5PNMnsluGyWZhU62ttdHfGyhu4Bq3BAIWAZiw+tAGDJpBUEohH+9SKZLf76A+pxXYBY3i4G6s27sAScru9qAOVnuJZpN2SAPQdBUttdtCjvnPOM5/T9Ks3tqYzjGPboKoxRPPIsSjAB7UAaa6w8gxuLGPnk96aNRwGjznJJIpi6Uiqyo3b+dUJ7V4pZdvUGgDROpbVIXrwfyqFZ/JyFPEcmCP7yn/8AV+tZ0iShQQMt0pfMcmbKn7g4/wCBAUASG4lF1Jbs20OcBumG7H/PrUMgbiYErk4Yd1YdatNbeeyupI3KCD+HP65qw9hl2Mgx5gzx/eH+f1oAqx7LgDcPnx98Dr7GmvBjBU8ehp+znbE3B7Uv2SRTufPPUdjQBEiMW5B47ikkADZVSD9KlZVjbCsR68VBNKy98j60AT2z47c1rW8g2AAYNYUN0nfr9a1rVwygg5oA1QchaXdiQVCjEkU/OXzQBKrZY0VGpOWPaigDJlzkZquwxyadNMSQMVXZmJxgmgCypkxmM8jtip4tUM6NBcR/PjAOKbYh9w/qKs6xZeUY7mJeTwQKAM0/u5PkeReegbFbtn5kirsUn1yc1n21q0zqTz6gVvW8yQoIwoB/lQA9TLEOSceg4pkkrKdxJBPbvVlQH+vr6Uv2fdkKOT60AZFzEkw3PwKpQwrHMZMYA4FbNzHFbqTI25vQViSSPNOSBhF6CgC3uClAoyTUMkHmyZwBzgirFtGfLZm6gcVPaxiRWbIz1xQBmpZBnKtx9aSezRYZOPm4Ufz/AKVqTwNtDrggdR6VFdxK0cSjqPnP1P8A+qgDMXEEceRxt/qae9yJIuBu2EYOOn+cCrjIjgBh0HpVaULCspQAjbyPxFAGdMqWrs3DHPHfiqhu5XJ+XK+44pb2YvICFypUdevSoVuHjGAhAPrzQA6W4ZU2gEZrNlmcn7xxVyWSRs7hj61QkPznkH6CgBu45zVq1vZIXA3HFVKKAOws79ZUHIzVg3ADZrjIbiSBsofwrYstSWZgsvBoA6CO5Gw0VCkIZAVPWigBPsyHnFIbdB2q0BzTigIoApquw/LUj6kt0htZPldeh9amCADpxUN3BEhSfZgdDQBpackMUXC7m9BT5ImGTtwTVCy1CGJgqnHfJFaEt/E8YwwxQBLDKtvbgE8k8+tXUY+QGGNzdKxIZRKrOx+UGrdpqMUJZpG3dv8A61AFia2L9jz61A9lHEnQA1oxXEU6GTORUbw/aZQM/KOeKAMqb5Qke3CnqahRHt7goM47VuXFor4Ufw1UkiUT89cUAMtv9c2/oRyKzriZkuWUDqasSybHdAcdxUDIGw5I3HigCnJesshI5PTFMEbzs5HGR/Wp7izXBcHmqX2z7MjHPzA4xQAS2qxqN68gf1rLYNNcAIvAPfpU91qRucIR27UtskZkBbJYetAC3NjlOMA1i3FpJCxJBI9a6nG4cVBJGGGGHFAHK0VrXOnKzFo+DWdLbyRH5l/GgCKgEg5BwaKKAOi0TUi37uQ5IorO0q0lkuA+CFFFAHaqgHWn7QF6U87OtI7gjCigBgGT0qy9stzaGNhzVVWKk1etd7qckCgDFbSxICnzCQdKjGjXKj5mIAHQVpTxTxTmTkAdPepo7zCBcEs3WgDBdLiGPywDgHNVCLjdk5x1ye1dHOwJwwAJpkqxFDGVHNAFXS75iuxshFPy+9dFp86s5jyC3Wud8lIipB702O6kt7oOjY55oA7JgEV2PUisTUZ0tv3hOTjpQ1+80OCeDyDWPes0su1jkUAU7jVBgv1Oe1QQ6jK7Avnnmta30VHXey5z6086PFuHSgDPTUt0TBzgjkVQu7iG4jG1gJB1HrW4uiRsWwQQwziufvdFNvc/K+VP6UAUSyrNkHirlmHZy5OQelJHpxyNxBWrvlqhCrxigCxE5HWpuHHIqsnNSDd2PFACSW2eVqjLGckMuRWkCe5oKKeuDQBjG3T+4KckCKfuDP0rVEKHtT/JQfw0AQ2jbTgLRVlFUDgUUAaexm4NP2Ln5jTgx9KaEVySTzQA3GXwo4p0xliXdE3zDtSYIHyk5pCsjEDOT60AUf7an8zbPFg+h61eW+WW2LRR/P0BxU72kUo2uBuI5OOaglgktwEhKhcdKAKkFrM9xunbjrU1xCznKjpU1qNhLSvmrDTR+UcYyeaAMCRJRkvkAVWfcRnPFbTIZUY44qj9n2v04oAigvPLi256dKnguIxJmQbh2NVJLQZOK09OtPOjIxwPWgDVikEsGUGOKq+eoLB+MVYgHkuFbhaZfWqS5KttJ6mgDLm+0xz7rdgwHQZqCWKe6yXCqT1qC4F3ZSbkYyL7VXfUrkjIiIbuKAJJsWq4Y5aqwl3Dng0x/MnG5xhieAadFbMvJoAmVjjinCQ0gBA+7xSEgjG3FAE+4BRupQAeQargk1IuTxQBPgKMg80vmcVGAR16U9V9waAHKTniigH0ooA2WyGwF605ikadPqaeEK8E80xZoVyrsCR1oAQSCROFxTkYbclgCKYXDD938uaktrZBG88g3BexPegAM6EAK/I/WkF1u4K81aSG3jHn3BCqOcDis6dhMzzQsQrfdz0AoAZOpPQ8dTzTPMEQ4BP1qi5ktgzs+4e3aiK4kZUlwGVumaANsKHtRjg96oMOo7ini/DRkL8oA5qot6C2cUAP3KrAYyfeug02BRATjFcwJ99wMDvXUWTh4dqnoKAIpnVTiQcZxVaeKSRSUOR0AqO7MjSMsiEgdMVXE7xjC5XHXnrQBXmtpVUgZHsaglUhApGD2zVuS9Yrtfd+AqpNKgGS+T2oAq8MwDAbh3p4UgdOKap3PuyDU5Ydj+FADPLyvvRGiKTvUt6UquGOMkEUEnjNACqqAY203AU8U/PamMDzzQAudwpMFab8w4FP5289aAAMQ3PSikHzcMKKAOmGSpZup9Kg8tS54AJ71IGyQFQ/U1J5Ybk/kaAIDCxyAfpio5ZEt4VikdhvcZqwSykhcqo702aMTEAhT6k0ALrAjn02ZGkwFXIrJnvFj8K28iffBAPvV270z7ZatEJnArGGgXQgNqLoSRA5CkfdoAnl2/ZlB/iXOapxXKKkATsShB9asrpt4U8neGUDAYiqCeH7iObJlO4HPtQBK16IpmzyG4IoV0IyFIzUzaOyMJJHy1TJa84A/SgCtArtMMDHpXTwXAiVUAy+OaxBHJbZZVyR3xT7a5xC8srgNgnntQBoXkrbJJNw2oMk54rJRZtWhR48oDzuU1TF00mnhZJNz3LkYz0Ud63bTZFa7IxhVXGaAMl7ea3UP5hcoecnqKuTWkBRXU/MwyV64qvbtJfNNsxtQHNTWjCa2E7LtI4z60AU7izXyfOhBGPvDNV4pMjDdafBds63IzlWbgUzAK9MGgCYLu6Hn1pQSDtNRr8o6mnnke9ACjOcdvUUpiy25Sc+9NQZqUKxOVBx9KAF2hgMcGl2joSaM4HzL0pyspGRzQA0KB1GaKfuBooA646XIFZlbJXrx0qs1pOE8zaSp74zV6zcveTSED5lGV7etWhO51T7OceWUz9MUAc/KjY5ILehpioVUIzck84FdQ8afYmXYo8sZBxyfrWaunQSK8mGVgMjB470AZrOI22quQOuKZvCtlFOe+ak2BN+MnB4zUSsSrGgCRd+CqqpP5VGYlzk58zNSp8pGO4zTXQBi+ST9aAK53l2XaBzwxFNRPmI3Ln+9tzSJI880iu3AB6VZQBlA2jGKAEaINGF+XI6kDrVSfT4Z0IYAD0FX41Ah345IqvgbWyAcHjNAGMPDqRTedFKQf7rcipLq1uyBFDJ8mOg61qux2HgdfSg8FgAOgoAyIra4tLby404b7x7mkmS4lQIf3cQ7IK2s/KR7ULGu3OO9AHPCw8pPkBwakS0crymR61tvEi8Y4IqEooPAx9KAMw2pz0xijyDgc81pEAc+gqu6g59jQBU8n5gM9KtRhlGGPH+zTH6Ajg+1OjYn5u9ADTEBkhs59TQqxg8nBp8yjyiwGDTDGuAaAFaIH5s/kaKkCjbnFFAH//Z'
    var img = jpg
    app.post('/api/products.json', function(req, res){
      console.log(req.body)
    })

    app.get('/api/products.json', function(req, res) {
      res.json({products: [
        {
          name: 'retro computer monitor',
          src: img,
          price: 100,
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      , {
        name: 'retro computer monitor',
        src: img,
        price: 1,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        price: 10,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        price: 100,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      ]})
    })

    app.get('/api/potential_customers.json', function(req, res){
      res.json({'potentialCustomers': [
        'charlie tanksley',
        'some really long thing with such a long name you say "wow" that is so long',
        'CBQ',
        'charlie_tanksley',
        'jeremy',
        'something good',
        'hahahahahah']})
    })

    app.post('/api/purchases.json', function(req, res) {
      res.json({store: {
        customer: {
          id: 1
        , availableKarma: 100
        , name: req.body.customerName
        }
      , products: [
        {
          id: req.body.productId,
          price: 10,
          unitsOwned: 0,
          name: 'retro computer monitor',
          src: img,
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      ]
      }})
    })

    app.get('/api/customer_treasures.json', function(req, res) {
      res.json({treasures: {
        customer: {
          id: 1
        , name: req.query.customerName
        }
      , treasures: [
        {
          name: 'retro computer monitor',
          src: img,
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      ]
      }})
    })

    app.get('/api/stores.json', function(req, res){
      res.json({store: {
        customer: {
          id: 1
        , availableKarma: 100
        , name: req.query.customerName
        }
      , products: [
        {
          id: 1,
          price: 10,
          unitsOwned: 0,
          name: 'retro computer monitor',
          src: img,
          attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
          attributionText: 'Marcin Wichary'
        }
      , {
        id: 2,
        price: 2,
        unitsOwned: 10,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 3,
        price: 5,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 4,
        price: 20,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 5,
        price: 3,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 6,
        price: 3,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 7,
        price: 200,
        unitsOwned: 0,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 9,
        price: 2,
        unitsOwned: 1,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      , {
        id: 10,
        price: 10,
        unitsOwned: 3,
        name: 'retro computer monitor',
        src: img,
        attributionUrl: 'http://www.flickr.com/photos/mwichary/4376985108/sizes/l/',
        attributionText: 'Marcin Wichary'
      }
      ]
      }})
    })
  }
}