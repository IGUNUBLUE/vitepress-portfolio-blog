---
title: Instalar brave (navegador) en Arch.
author: Lenin AGC
date: 2020-10-11 14:33:00
categories: [GNU/Linux, Browser]
tags: [ArchLinux, free-software, Tutorial]
math: true
---

![image 1](/assets/img_posts/post6_img0.png)

Hola!, Buenos días! Teniendo siempre en cuenta mi compromiso de compartir todo aquello que pueda ahorra tiempo a quienes inician en el multiverso GNU/Linux, compartiré unos cortos pasos para instalar el negador web Brave; obviamente en Arch linux.

## Antes de nada… ¿Que es brave?

Brave es un navegador web de código abierto basado en Chromium, creado por la compañía Brave Software en el año 2016, fundada por el cofundador del Proyecto Mozilla y creador de JavaScript, Brendan Eich. [by Wikipedia](<https://es.wikipedia.org/wiki/Brave_(navegador_web)>).

Creo inmensamente que por algo se debe empezar y al momento de usar internet el navegador es una de esas herramientas que si o si debes usar , por eso he decidido darle una oportunidad. Antes he estado usando firefox sin problemas y como todo entusiasta siempre estoy probando nuevas herramientas, creando posibilidades de uso, indagando sobre lo que funciona mejor, eso no hace dueños de lo que usamos.

## Instalando…

Lo que me gusta hacer a mi, es ir a la pagina https://aur.archlinux.org/ aquí siempre encuentro todo lo que necesito, aunque… podría usar pacman pero me gusta ir a la fija y el proceso no es complicado.

La anterior url nos dirige hacia el repositorio comunitario de arch.

![image 2](/assets/img_posts/post6_img1.png)

Como lo señalo en la imagen anterior, solo debemos escribir el nombre del paquete que necesitamos en el campo **Package search**.

![image 3]({{ "/assets/img_posts/post6_img2.png" | relative_url }})

Los resultados para brave son varios. Basta con usar como referente para escoger el paquete los item **Votes** y **Popularity**, el mejor calificado por la comunidad sera el ganador, en esta caso lo señale con la linea roja. Damos click en el nombre y nos enviará a su pagina de detalles, ahí encontraremos mucha mas información y la url del código fuente para clonar y “compilar”.

![image 4](/assets/img_posts/post6_img3.png)

Copiamos (click derecho, copiar URL) el Git Clone URL para usarlo en nuestra terminal.

![image 5](/assets/img_posts/post6_img4.png)

Usaremos la sentencia **git clone** mas la dirección del repo que copiamos anteriormente para clonar de manera local, algo así:

```terminal
$ git clone https://aur.archlinux.org/brave-bin.git
```

Una vez se tiene descargado el código fuente pasaremos a compilar ubicándonos dentro de la carpeta del repositorio **git** que acabamos de clonar, generalmente tiene el nombre del proyecto.

![image 6](/assets/img_posts/post6_img5.png)

Yo siempre tengo una carpeta en mi home a la que llamo **Aur** dentro de esta carpeta mantengo todos los repositorios que he clonado para así ir actualizando con un **git pull**.

Como muestra la imagen con el comando **pwd** veo la ruta completa en la que estoy, recuerden que estando en la terminal pueden usar **cd** mas el nombre del directorio para entrar a el por decirlo de alguna manera y con **ls** ver las subcarpetas. Solo nos faltaría ejecutar **makepkg -sir**, ingresar la contraseña en el caso de que la solicite y listo tendremos instalado brave.

Un saludo y abrazo a todos!

El placer de hacer y compartir.
