import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => {
    const cart = get(cartState).reduce((a, b) => a + b.price * b.amount, 0);

    return {
      totalCost: cart,
    };
  },
});

export const productsState = atom({
  key: "productsState",
  default: [
    {
      title: "Toiletpapir",
      id: "sajkdladj3223",
      price: 20,
      src:
        "https://cdn.lomax.dk/images/t_item_large/f_auto/v1541590063/produkter/60000780/lotus-royal-toiletpapir-3lags-7-x-8-ruller.jpg",
    },
    {
      title: "Acer Bærbar",
      id: "sajkjs3223",
      price: 4000,
      src:
        "https://www.elgiganten.dk/image/dv_web_D180001002358194/50769/acer-aspire-3-156-baerbar-computer-sort.jpg?$prod_all4one$",
    },
    {
      title: "RTX 2070 Super",
      id: "dsapokjdas",
      price: 4799,
      src: "https://www.computeruniverse.net/images/800/90773939F8308B8D406A40599688BD45.jpg",
    },
    {
      title: "Ost",
      id: "+0923iuojdsa",
      price: 25,
      src:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Marabou Chokolade",
      price: 30,
      id: "øpoewqå0xz",
      src:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhUWExUXFRcVFhcVGBUYFRcYFhkZFRUYHSggGBolHhcVIjEhJSorLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGi8lHyUtLS8vMC8tLTItLy0tLi8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEgQAAIBAgQCBQcGDAUEAwAAAAECAAMRBAUSITFRBiJBYXETMoGRobHRFCNSkrLwBxUzQmJyc6LBwtLhFlNkgrMXQ2ODJDTx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDAQQFBgf/xAA8EQACAQIDBAcHAgYCAgMAAAAAAQIDEQQhMQUSQVETFDJhgZGxFSJxocHR8FLhBjRCYnLxI4JDwiQlM//aAAwDAQACEQMRAD8A+4wBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQDUx2YJSKh79a9rC/DczWxGLp0GlPj9P9k4wctDzD5nScalba1+DDbwIlS2lhrX3vk/sZ6OWljVr9IaKm3WPeAB9oiUva+G4Nvw+9iXQTIx0lo/pfu/1THtfD9/y+46CZmvSGifpfu/1TPtah3/L7joJEi53SPP1p/VJLatDv+X3MdDIkGbJyPrX+qS9p0Ofp9x0Uj38aJ3+tf6pn2lQ5+n3MdFI9/Gafcr/VHtLD/q9PuOike/jJPuV+Mz7Rw/6l5r7mOjkPxin3K/GPaOH/AFLzQ6OR7+ME5+1fjM+0MP8AqXmh0cj35cnP2j4zPX6H6l5jcke/LV+5Hxmeu0P1IbkuR78sX7kfGZ65R/UhuMfKh97TKxVJ8TG4wcUPvaZeKpriN1kOFzalUBNNg1uNiLjxHESXTwcd5aFlTD1KfbViT5esp6/Q/UQ6ORicxSQe0sOv6jPRSMGzamOJkPauG/UZ6GRE2eUh2+6Re2MMuI6GRh/iGjz90g9t4VcX5EurzMT0jpd/skHt3Dd/kZ6tMx/xLS5N7PjI+3sPyfy+46tIlfPaYUPpYr3WvMx25Rb7L+X3MdBIipdKsKTpLlW5FW39IBE2o7UwzV3K3gzHQT5GymdUmIC3N2AG1hu2nt75XHa+HlNQjdttLTnlxMOjJK7LKdUqOb6X8aPi/wBkTz+3daf/AG+htYbiR5ItqV//ABicqUEqLZN9pFFmA6uofcTXg3GORfxK0Be0mZtHiZJVK9lo91GMyUMO6G0D0MO6QugZhl7pi8Qe2WYtAZmSqsWiYzJFRe+ZSiLkgVZK0TB6F5Xi3IXMwWmVvoZEiM8kpTMWRs03eXwcyLSNlGbvmwlJ6kbI+f8ASXKqlHEF6ZKhyXUqSLE+cLjv38CJswqVFZJHqdnYqnWoKE1drJ/DgQUMRmVQlEqsxCkgMASbdgNrk+Jk3h1N+9DMnWw2z4x35xsr8HY8o0cwqmy4peNUA/mlqSU2IDEcCagAPDYnhvMxwMX/AElM6Oz6S3pU3/Txd7NtaX4Wu138zXoJjCgq1MXVRNDM+lTrUrU8kEC3F2J5kAWN+EmsBT4ovlTwim6dOkm7pLPJ3jvXvnkl8bmFBsRUrrSTGYkq2+o61cWUuV8nqsX2sADYkjeSWCpXsoryLJ06NKg6k6ULrhk1qle9tM75q6QZqpU1Pl1QU/KeTvVpsWB8nr66gsRY9U2vzkJYOj+n5EHh6UnuOgnK18pd9snlrrw5G5RbF0S2tfLooUsaZsy6lDjqOA99JuV0i3baalXZ1KWmRpSwuEqJbknBu9t7NZO2quteN8+BZ5ZmVKut0JuOKkWI9E4+IwsqLz0OdiMNVw8t2ovs/h+XLF6tqensJ9u8UdTVaKAfl0+/aJsvODM8Dq8sN6lP9on/ACyGE/mKf+S9SFTss7ue6Occ70sG9Hxf3CcDbmtPx+htYfiQ0TowpPKl/Cc2vlQJxzqIpCSae3KaMJNRL5L3ioNVucObM2I62YCmVDEDUd7ngL2v9+U3sLhXVpym38Pib2GwEq9OU1w072e5jmooLqffuBsT4SOEwrrxlKTsl6jBYCWKvbJL1NunXuAQdiAR6ZoOTTszRsS+UMjvswZLUMKTFiVahklJmGjKpiNKlidgLn0S6mpTkorVmYQc5KK1Zq5RnHly4UbIV3ve97/D2zaxVDoLLeu3qbWNwXVt1N3bRaBzNXeZo2PQxjeYJad5neYJ1Yy+EmiJs4c3uWNlUXY8h8Z0cDQniam6tCmvVjRg5SOSzbH/ACmtddqabL6O3vM9ZRwEG7WySt49x5/2vXpVFVg7Pl3d/O5WYjHvRLWPFWW+4sG7QRwMqq4CrB3jn6nrcF/EWBxUVHEe47p84u3fy+PmaVfpDcMAg6wrXs1hqrU0RiBbYXTVb9Ija00506kdYteDO9QlhKjThXi7bvFaRbaTz5O3geVukPlFVKqEqaZSqVYKztr1rUW4IDbbg7NduF9q23xRswwcYtzozV73XFJWs45PTlysuRBi80WrVRnNYoiBLmoGrGxdg5Yi2oM17clAv2zDldl9LCyp0pRju3bvp7vDK2trL53sWlLOaFR1FTXZaiuGcBjUZKK01asAwvdxqYX3G1zcmZ3k9TTlg61OD3LZpqyysnJtqOXLJd/AjxeHtQqqzJVc1y5aqXoEkoRqplioL6tW1yDbYGVtRksmjNOpvVoOKcUo2tG0lro7XytbPKxx+Fx9SjUDqdxz4EHiDNGrBTi4yOxiMNTr03CWj+XefSaWIFSkjjtAYekXnn4wcJuD4HhqtN05uEtU7FSx+fX0e8TYfYZHgdXkvn0/11/5DI4X+Yp/5R9Sup2Wd3PcHOKDpQOtR8X9wnC2yryp+P0NnD8TWzI6cGf1FHrIE5mMypRXwLKWdQp8Ot6Y8DNCC9wvm/eKfFJZjIsyjh6+Gq4nVXuNGvSL32sNrDla3pM9FRio2pcbHs8NKnh1DDvXdv8Af538jZx+W1a2uqWFkCKBv3Db03PpmaVFU0qb1d/uVYNww0YUH2pXf54WRaYHPkTyNJwbmnTu30Syi1x2jhOXPBb+/O9s3ZHHls2U41aqeUXKy52eZlmPSBg7rRXV5MHWSBbiFPHkTb0GXYXDUY049Iryl+WLsJgKPRwlX1m8vz81IcT0gxCUqL+THXBJbbezGw09nV079t5Olh6Eqs/dvbhy/GWYfAYapiKsHw0Wfi7/ABPU6UVRRF6fzj1CqbW6oC925ubenuknhaXTXcbRSzXeZnsyj1lrSEYpv45/RX/2TZdnGJf5T5WwFKk+wA2cXA3HHgZXXpU/+Pcja7Rr4zCYdRo9Cu2+/R2+5z+Er4rDU1qIxVGqehmUDiO0b++bdSnCUt2Su7HZrUMNiKzpzV5KPkr+p0+a9JqhfydBTdaet9xt1NbDfsA9s1sNSpQjvVFe7svQ4uCwNFUlWr8XZedvzuIMT0srHD06gW12dGYEbsoBG3ZcH18pOlRoxrSvG/JGxR2ZQ63OlLgk0u56+XAssBnFepmCUtWmmtMF1sLEmkGPqZh6prThFUN5Ljr4mlPDUYYB1be85ZPuvb0R2Lmam8cY5jpjnBuuEpHhY1SO1j2egT6BszB9BRjTXblr3c/zkeV2ji+lqNLsr1KzDsQAqgknYAC5J7gOM9LGlCnG2iRxXKU33klXBV2sDQqm5IHzbbkcezsmOloW7S80WKjXvlF+TK58sQ02dkqag4XzOoNjcMx4PccJhqO+oq1rX1z8uXeSvLo3J3unbTLz59xsL0ZpirSR9WmpWFO4RkNiVGoF1tfrebxFt+IlLnFwlKKzSvqnz5Pu1LtxxnGMtG7aNcua79DJ+jdPybsmsuuK8iqjfULMRsBfV1RIWi5pStZx3vT5ZlqqVIwk4N3U93J/HlxK9ss0niQQe3iCJOWBozXZXkTp7Zx1F2VWS/7P0eRBia1ZATq1qAbht9jxt3/2nMxOwaUouVPJ/E6+C/ietGSVZKSyz7L81l5o0M7y9qVibFWF0deDA7jwNuyeQjXhVulk1quKPq2CxtLFQ3oPw4nU9FXJwQv+aagHo3/jOTilbEeB5rbEVHFPvsYpvWHiPtCR/oOaddkXn0/1x/yGYwv8zD4r1RXU7LO7nuDnFF0kHzlDxqe4TibW7dPx+hsUNGV/SV7YULzCewzkY2Wi7kX0F71zSwa/NIfH+E1qKvB/Esqdop+k1Mii7j6De4xRjetGPei7CxU6sIvi16nO4IBcFbtXY+PlAfcROwoyjjly3fz5noKm97Su9Gsvhb73Nml/9RjzOr1Oi/ymZnU/+dGP9r+ZCc//ALGKfBW+TZDQoUK7UF0dcFC5tbq0hY3Pbfb1iRq05UuknJ+672XexVVbDqtOUvcd7Lvl9jVw1RKaVlHn1GXjyBYnf0zZ6H34NaRv52sjdnRlKpSa7ME/RJFpXdX+SAbg6V3HIpTPtDSihF05Vpy11+TZo0YzpyxE5a6/Jv6ozzOsqYiiWACoA1gBt1mOwHeB7ZXgt+rhZu95O6z+FiGBhOphKlneTbWb7lxNXC1Vali+OpxqO35uojj4vL6tFqpRS0WXy/Yvr0nGrh1wjl4pX+h5QCVaeGw43Op9fcC7H7NzLH/xTqVpclbwX3JzcqNStiZZKyt35fc2GrU6dXFkgBmV1XbjqYbeqx9EhGm6lKlbTJvy+5TGlOrQw6jomm/Bfchx9FRh8OrAdYvUt3Ei3rW0tpWnXqNcLIuoTc8VWkuCUfv8yxyDEo+MqVLWLq2kcbbqdz2bLNbG0ZQwqiuFr/P7mnj6M6eChT4Rav8AP6s6fF4kIjNyH9pzMDFSxME+d/LP6HmMTLdpSfd65HzbC1i7vVbizE+sz6rs+k3ebPDYiedjboYkLURmNgHUna+wIPD0To1YvcaXJlVJpTi3omi0xGc0W8pZ262PGIHVPmC+3Hzt/ZObGhUVsllDd14nQdem75vOe9pwJhmqKKlYDUr5glVFIsWVS7t6tSjxImFQlJxp6NU2n8XZL0JdNGClU1TqJr4LN/nM8o5xRRrAsytjVxBJXdVUk6bX3c3sSNtuO+1zwtWS0Sag4663+nzK1iKUXa90572mlvqZ4XOaCLUVgzCpiWfZbEIyshKtfq1BruOzYjtiphasnFrK0beKs81xWQhiaMVJPO8m9ODyyfB5lDXcAkKSy32JGkkd69k6EU2ryVmc+Vk7Rd0ald9pibsjMSkOKrVlWmx6lDqqBtfTtvzNtp86xWFhSxVRpZyd/M+w/wAOU4vBwxC7Wngnax3+S4XRhQvNXb6249lp5jE1FPEO3DI1tp1lWxMpLTJeRo4U/Og+H2hJS7JpM6zIj85T/WX/AJDI4b+Yh/lH1RXPss76e5OcUnSAfOUPGp7hOLtXt0/H6GxR0ZS9J36gX/xqfb/acPEu78EbNA8y/wDIJ/u/lkMP2PH6IzV7RHjKQdGUi4III5g7ESFRuElKOqM05uMk1qjm2y6mFNLT1b3tduPO97+2WdfrOfSXz00N3r1fpel3vetbRafDQkoYVEXQq9U3uCSb6tje8pniqs6iqN5rQrqYmrUqKpJ+8voRYdKNK4UW3sfOY+Fzc2llarXrpb7y8EW1qmIxFnN35aL7D5FQfV1B1iC3nA347HsHhtJ9dxMbZ6fD5kuuYqG772istPnz8TY00dSEjrU7hLarLbawA227PZK41a+7JXylqVqpX3JRvlLN6Z8f9mddKL2dlDaCQOOxAuQRwPDtuJKjUr0k6cXa+YpVK9NOEHa/54eBJhMHRAemqCzeeN99yLXPLfbsv3yVTEV24zk9NDFXEV5OM5S00+X5fiTZdldGiSaaWJFiSSxtyBJ2HwmK2Kq1labyI4jGVsQkqjy5aL5HuKyehUfW6Xba+5ANuGoA2MlTxlanDci8jNHHV6UOjhKy9PhyIs1bCl0FcrqXdQSwAB+lba2w2MnQniIxbp6MxQrV6UX0TaT1/PqSZfRw6lno6CW4lWDd9hvsL9gka9avKKjUvZdxitiK1SKjUbsvzx8TzP6h+T1PAH1MDLdl263Dx9GcvHfy8vD1Rw2Xt1J9fwaXRqx4Kr2i2w2X6atIVGTUalHVSYMW01CvHq6fNYG17i/OU4ivvU5OCdrSz4XXjfXuNqjQ3akVNq91lxs/Cxnj8idqreRKMrYqpRVVuPJsCzBWDKAAFHEXGxmnTxsYwXSXTUVL4rTnz5l1TBylN9HZpya+D8uRs9H8sJq0WcpWosatPtZQy02fTpcC29mFuNz3xiMSlTko3jJWfm0uHkSw2HvUg5WlHNd2l+Pme9HsvAxVBKmh9R66EE6bqTpcMLau4XtNnE128POULq2j8eFnoUYWilXhGdnfVeF87rU1MJlTPTLhl6tM1CtyW0qbE7AgHuJBNpsTxUYzUWnm7eP5yKIYeUoOaayV/BfnEsMDlYRa/lQmr5I1RUIJZb6dLXtZTY8L36w9GtWxO9KG5e2/a/B813+RsUsPuxnv2vuN24rk+7zKXDUAzgHhvf1S6pO+hr0455meQZICTVa2guxVfpWNrt3XHDt9/wA3/iPaG5ip0qeuV3yy4d59H2NjHS2ZClHV3u+WfA6ojqVP2bn1CeXpdpGGc7gfyvq94m/Psg6vIT16X7RR+/K8N/Mw/wAo+qIT7DPoE90c4pc+/KUP/Z7hONtXt0/+30L6OjKDpSeP7JPtNODX1NqgVmJzg0KNICnq1azxta2gcjLsFR6SHi/RHQw+B6y5Peta3D495VYrpPXA6lFP92pvcRN17OjLVM6NLY9C/vTfyX3KWr0hxRP5FPU39ULZtJf0vzN72PhOb8/2MkzzF/5VIfrXH80l7Mov+l+ZH2ThOF/P9iZMyxbcBh/QtRv5rSqeAw0e1K3iatXZ+FhrJrxRu4ZsYeIoH0Ov8TNOpRwa0qPw/Ec+pRwsdKj8r/Ysr1QvmUy3LWwHr0X9k092nvZSdvh+5ptR3snl8P3+pUYvpDiKR62CNua1b3/cvNung6U9Kvy/c2aeHoz/APJb4r97G7RzRaygGuaBYE/kwxA5ar9/IeibdLC0OOduf2K50dx5K5lgNSM3/wAwVEHnFlcgem5IMueHpSyaXoJqLV3GxvDOKZ82rTc/o6tvEEX9k154GknlPIqVJvga6YlSbWDm/AjYk+PHwnRUoqO7BE923GxHmuB8nTatUXSF36uxv2ADhc+ExKnUtfIlCrFu1zkE6QV6vzQDdYENdgV023JuhIFuUiqG5NVEldO+hipTpVYuElkzcFIKOFgdVhe99PaO2xuPA3G+xnuth42Vek4T1j6Hh9u7OjhaidPsy+TRZV841vTqNRQ1UNMmpdgX8nbTdb2B6oBNt7dk2Z4bdjKEZPdd8ssr69/wNDrW9KM5RW8rZ55207jOlnjqSyIoY4k4i9yeswKlbfRIZhz34zQqYWLyk8t3d8Pvki+OLlHOKz3t7x5fAzwOcGkU0UwER3cLqJu9RdBJbjYLsB67zE6Knfelm0lfuTv66iniHTa3Y5Jt273l6ZInoZuRVp1igNSmLaiTd7DSpqc2A2v22F5b0ScJU08n8vgQVe1SNRq7XHnwV+/vJKGaaaYpimthTqU+LbrUN9wCAWFhv22k5Ut6e/vZ3T4aoxGvuw3N1Ws1x0f5qeVs7uCWpoXaj5FnuwLLtYkA21WUbyPV9EpOyd0stfsS6w3duObW63nmvuVHldCO43PmqLblm2Fu/f2zal7qvLJLMqpU76fA6TC4cUqaJfzVAPeQNz67z4tjsT1nEzrfqbfhw+R7yhS6KlGHJEz/AJKr+yqfZMxRXvInI5/Kk1Vj3f1LN+plAHRZGx8pR/aIf35XQ/mof5L1RCfYZ9GnuTnFLnv5Wh/7Pcs421O3T/7fQvo6M5/pSd2/ZJ9pp56q8zboFbiMOWpUSFvYP/JOvsitTp0Zb7t7z9EdLC1o097edtPqZYbo9Vq9gA+/gJvSx6f/AOcW/kictp04aK55iOiWgXfUfTt7JzMRjsSv6bLz+eZB7Xqy7Nl+d5FSyWkvBB6d5zalerU1kzWqYytU7UmbS4QDgBNdxZr7xjXZUF2Nh4E+6Tp4epU7KJJOWho183pr2M3gPiRNhbPq8bFioyZW4vpLYG1C4/ScD2AGWrZ7WcpFkcO+ZztfNC9QFqICfoXJHfv7tpv0aKtu3L3eC5mnjcQalSnSwusPqsCDpZ2ItsDuFG5ue/lOhDDwSvJGpOvLRH0LBZSlNFFRi9Sw1ufzm9HZ47+mR3I8iO/Jm5g0RWGgDhYcNv8A9/hMoi7vU5LpV0g8s+hDemhsLfnNwLfwH95PXMsjHdQwtNaKHVbWReoeOkcQgty7eZ8AZXJ3eRbGNs2VyuWqF2e9xZVsAFXsA5+M6OE2pPCR3YQT+JzMdsmljJ70pNZcLfU27TsUdt0K2U/cffp5/ex53FbAxNDOHvru18vtc9+WAdi7d3v+/ZNiUG80zmp2yaInzdR2Lwtw8PhIKg+ZPevwMRnwFuqpsLbiWxw/eL9xG+ekiwVfV6bTZhhlzMeBr08Szm17cz2AcyZuxoxSuRUc7FtkQ8vVFQn5qkfmx/mONiw5hffblPF/xZtJ0qPV6esu0+S5ePpfuO/srBXl0slktDp7z5tY9CTE/N1P2be6XUu0iDKfo2Qa7Du/nWbtXsIkzociS1RP1k+2ZXh/5in/AJR9SufYZ9BnujmlTnA+cpf7/wCWcfanah4/QvpaM5bpYd37kpfaM85N5m3R0Jcrb5hfE+5ZKg/ca736IzV7XgWfXbD2RC5NSxANjYaTe+oe+dPC5xS736I1amphTNRKVUVUZd0IuRY3IXq9djtpB7POvxvKMc3CEk9bL1XcjNLOSNFaqHtnHVU2XFmdQqFJuNpsYeUalSMXxZhRdyox+PSkheodSX06lHWv2AgbHx2npacYxjuRWRao8sjhMdmlMVda1WNkPk0a+gNzI4dXl23k4Ye0N1E5VrSubGFzNdmqsag2AVWKhbdpHb2zEsPG92SjWbyN7NcbhigOrySEWsFJLW47XGriOclTjwSMTb1bN3KMspYI+WelUZ6ibEjyZpqeQN+sdr332tLJTejRQo7zumWIx9CpwqlDyqKR+8JCyZYlJcLlN0rzYUaZpU3BqVNmZTcInIHm1/VMpBczmspUIBVY2b/si3I2L8ttwvfv+buk+BZFX1KPPM8dnApNZFtfYWZu30C9vWeUup0o2z1NetWlvZaHQZTg6lWl5Sw2BJ8ALki81Kst1uxswadrlmmT1e10XxbUf3bzXd2WqUVoSfiFG86q7H9Fbe0n+Evw2Mr4Z/8AHLLlw8vsamKwlDEr/khnz4/nxOVx9FqNVqVTzhuDa2pTwYA8/Ybie0wmKjiaanHy5M8ficJKhNxZ5SoO3BT9+XObiSWrKNxmwlFVAao6qDY2vdjfkJtJxirswoNkh+dOhVZEFrC3XqFiLDV2XuPZOFtHbSpxcaTu+L4L8/2zsYPZl/8AkrZRWfefRcg6MUtAaoCzJba9kQi1tO3O42F+E8JTryxm/Jt2u1yv3t5655LMjLaVStdUfdgsssvN568l8yxzHLwgDC4ubc1PG+/EHhsROdjsJCjFSV181x48PgyC2jWw9nNuUXz+dnrfuf7mjXa1Kp+zb3TSpdpHoYSU0pR0eZT9DV14o/q3/eE6FZe4l3k55I6vLEtVQfp0/tSrDprEU/8AKPqVTd4s7qe5OcVWbflaXhU/lnG2r2oeP0LqWjOS6TNdqv6tP3zzcnc3qWhNlH5Een+ElR7L+P2MVe0WZrKuGbUL3ZgBd1ubA21ILrwO4nUwdVwV0uL+hrVFdkKVw9CoAmk3Ukanfz2VrhnANuIt2W7JRtOrKpFtrK3/ALLvM0VZlcqTz92bdzJ6IYWIlkJSi7owVWZdH3q02pJUUBvpIWseYsw9pnYwm0Km8ouLk+7Uz0mRymM6B0kKUWxTeUYgl9IsdyNOnV1ezffh37dueMlBOW7otP3MKlvQvxNvH5SmAwxTR5VyeqxQ3OrYgMliNryujiliJXTsThuqNzPM+j74lKJoCmi+SAIYvq1cTqGgAceZmVjaVJuMr38PuVTk5PM6HLMXXoqExNVXsgXSOtqPC51brtbYdpPpnHEqSvHQnGjvJZeJV53nGF8qBVonUyjrU3VWBFl0lDsTbSfAydN70dCe5KGVymzjKKLlaqVSUA+cVl0uANwAeG97X9O9o3ktCdpPVHKdI8XUPVpjY8vzV7FHIW9ktp7t/eKq0mluxKrK8AWYBiF8dh4by2TRRBcz61keASlSszdUoda9oU8bdovvz8JpTVzbvyN+lXwZqrSNTSWNrgD+fUL+iFC2diEnK3eYZpgUcE08WKaWHnMALeB29kbikZU3HVHM43obiMQjLRdXIKsrAELe+9mtY7avZFHFrBT34vwKcX0eIp7stSEdAMxsAztbuIt6N5sy/imp/TFHPjs6hxbN7L+glemb2seZsT6zOVi9t1K+U5Nrlw+Rt0sPRpdlIuMN0Z8mQzqCVYNtcbggg2BseA48py6uOnOLink1Yxi4udCcY6tM63KailNPFgW6tgS1wLW5d5G+wm9sqrCVDo12lfLnf8z8DyuEnFw3eOeXP842z0Pc5qKAynzmItxvxuSwJ27APEzO1akI0nB6u3+36eJPGyik1xb8ebv6Lxsc3mDWpVf2bTiUF70V3npcDCUMPCMtbGj+DqqoxL6jxSw8dQnTrZbrfM263ZPo1DL11q3IqfUbzaoRpSqQlfijScnZoup6Y1iszVfnKR5a/bpnG2sneD+P0LqWjOQ6QLvVvyp++eZeiN6DPMtzGjTQLUZr8bKjN67Cwk6WSdzFS7eRK/SHB20uGZb3s1I7HmJsUq9Sn2Vf87ip07mFTpJgjcL1dVtVkNzY3tudt5DEVK9WO5u2RmNPddzBc7wnY5+rNLq8uKLMzP8AHOF+kfVJql3GLM8qZzhiLCqy+A/vNrDy6F3sZjdPQocdgcNVqFzjKig2sqqbAAdzj1zoxx8Iq24/kTc5nS4fO8MoAauzG3HSBf1Gcxxpt5Jrw/cqcZEn49wfbVPq/vMqEO/yX3I7sigr0cIavlFxlt7kNS1X9IcW9XrnSp4uko2cZfIu6arpkV+Hy3C+VqM+KBWp56GnrBN9rFuG1hbfh6JZLFQcVu3TXHJfUxKcnqvmba5RlgN0xFROwqttLA9mhrgf7bSrr81rn8Y5+afqRUprQUsjykbmrUbxYD7NpRLGVHp6fuN6ZM+S5MR5oB53v7zIdbqr+p+Rj3jFcswK20YllA4DqkeFieHcLSyOPqLVX8CanNaENPIstvd67ueNyVX2JaYntCu9MvD7mN6Rc4DEYCgdVMoG+lZSfXe806lStPtNkWm9S0HSjD9rj7+mVKMyO4D0ow30/dJJTG4zBukmG/zPZM7t9UN1kFTPcMeNQeoyt0TKTRpnNsKpNqoIPYU1S2kp077qTvzRzq+yqdSTnHJvXJNeRr4jPMK3Gpa1/NpW4knn3zFdVqzTcVlyy7zNDZdOElOebWmSS8uJp43McNUpuiVWDMthqSy78yCZGnSqwkpOOh1E3cosjVlqsDsQV+12TdxEk4Josnmkdh0dxdQ1KSl2tqpbXPfNWg0sTT/yXqima9x/A+jz3ZzTF722t6YtcHI9KMmxdYEUadEMbdbWwO3MWtNCts2hUztZ9320LYVpROJPQrPACFfDgHt1m/ulPsije7LOsy5GsfwfZ0eLYc/72+EsWzKSCxLT0RFS/BvnK8Dht+PWPZ32vz9cslgKctTZntKUtYIkP4Ps7/zMPxB849hvymFs6iuBhbRktIRJKfQPPB/3MOfFj8JCWzKDWhXPGuStupGf+B88+lhfWfhI+yqHeR60+Q/wPnfPC+s/CPZVHvHW3+lD/A2d88J6z8I9k0e8da/tPD0Ezr/S/WPwj2VR7x1r+1GJ6A5z/pfrN8Jn2XS5sx1r+08P4P8AOf8AS/Xb4R7Mpc2Y6z3GP/T3OeeG+u3wmfZlIz1n+09H4Ps554b67fCY9mUubHWf7R/09znnhvrt8Jn2bSM9a/tPP+nuc88N9Y/CPZlIx1nuPR+D/OvpYb6x+Ex7LomOsvkZjoHnXPC/WPwmPZVHvHWXyMh0FzrnhfWfhMeyaPNjrL5Hv+B86/0nrPwj2TR5sz1p8jw9Bc6/0v1j8I9lUubHWnyMG6AZzzwv1j8Jn2XS5sx1l8iM/g7znnhvrH4SS2bS5sdZfIwP4N8454b6x+El7Pp8x1l8jxfwb5wO3D/XPwh7Pp8x1l8jtOinRXE0R/8AIoYdm2BbWzbDcdU7eyShs+hHWN/iQlXm+Njt8LhEQC1NF/UUD3CbMaNOPZil4FTk3qzZlhgQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA//2Q==",
    },
  ],
});
