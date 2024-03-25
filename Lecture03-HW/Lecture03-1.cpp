#include <iostream>
#include <Windows.h>

enum ForeColour {
    Default = 0,
    Black = 30,
    Red = 31,
    Green = 32,
    Yellow = 33,
    Blue = 34,
    Magenta = 35,
    Cyan = 36,
    White = 37,
};

void drawBlock(char symbol, ForeColour color) {
    std::cout << "\x1b[" << color << "m" << symbol;
    std::cout.flush();
}

int main() {
    std::cout << "화면에 그림을 그리는 프로그램입니다." << std::endl;
    std::cout << "학번: 202127009" << std::endl;
    std::cout << "이름: 신도훈" << std::endl;
    std::cout << "\x1b[033m" << "아름다운 색!! 우왕";

    int blockCode;
    while (true) {
        std::cout << std::endl << "화면에 그릴 물체코드를 입력하세요: ";
        std::cin >> blockCode;

        if (blockCode == 64) { 
            break;
        }

        switch (blockCode) {
        case 1:
            drawBlock('*', White); 
            break;
        case 2:
            drawBlock('*', Red); 
            break;
        case 4:
            drawBlock('*', Green); 
            break;
        case 8:
            drawBlock('*', Yellow); 
            break;
        case 16:
            drawBlock('*', Cyan); 
            break;
        case 32:
            drawBlock('*', Magenta); 
            break;
        default:
            std::cout << "유효하지 않은 코드입니다. 다시 입력하세요." << std::endl;
            break;
        }
    }

    return 0;
}