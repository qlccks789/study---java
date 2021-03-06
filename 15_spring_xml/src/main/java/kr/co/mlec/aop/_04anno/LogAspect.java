package kr.co.mlec.aop._04anno;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

// AOP 공통기능 클래스로 사용
@Aspect
@Component
public class LogAspect {
	
	public void a() {
		System.out.println("Advice : AfterReturning");
	}
	
	public void b() {
		System.out.println("Advice : AfterThrowing");
	}
	
	// 공통기능 메서드 정의
	@Before("execution(* kr.co.mlec..*Controller.service(..))")
	public void showLog(JoinPoint jp) {
		System.out.println("---------------------------");
		System.out.println("로그 출력 공통기능 실행됨");
		
		// 핵심기능 클래스
		Object target = jp.getTarget();
		
		Class<?> clz = target.getClass();
		Signature sign = jp.getSignature();
		
		System.out.println("핵심기능클래스명 : " + clz.getName());
		System.out.println("메서드명 : " + sign.getName());
		System.out.println(
				"호출시간 : " + new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date())
		);
		System.out.println("---------------------------");
	}
}
















