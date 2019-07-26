# 飞控
***
## 开源飞控  
1. MWC  
2. baseflight  
	https://github.com/multiwii/baseflight  
	Naze32曾经国内流行着一款基于32位STM32处理器的FF飞控（后升级版更名为MMC10），某日本人将基于AVR单片机的MWC飞控的代码移植到了FF飞控上，固件名为baseflight，后又多次对硬件进行改进，最终成为了一个轻量级的高性能飞控：naze32。兼容MWC原来的上位机，也有自家的baseflight-GUI。
	硬件配置：STM32F1 + MPU6050 +HMC5883 + MS5611  

3. cleanflight  
	https://github.com/cleanflight/cleanflight  
	IMPORTANT NOTICE: Support for STM32F1 based flight controllers will be removed in late 2017, this includes NAZE, CC3D (original) and CJMCU like flight controllers.

	Cleanflight is flight controller software for multi-rotor and fixed wings. The Cleanflight project, and related projects such as Betaflight and iNav are used on the majority of flight controllers used around the world. There is no other software used on as many flight-controllers!

    If you're looking for experimental new features and don't mind doing your homework, checkout the betaflight fork.
    If you're looking for advanced navigation features then check out the iNav(INAVFlight) fork.
    All other users should use Cleanflight.

4. betaflight  
	https://github.com/betaflight/betaflight/wiki

5. INAVFlight   
	https://github.com/iNavFlight/inav

5. px4
6. apm  

7. crazyfile

***
1. StarryPilot(adrc算法)  
https://github.com/JcZou/StarryPilot
