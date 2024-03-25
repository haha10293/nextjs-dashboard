import { Inter, Lusitana } from 'next/font/google'

// サブセット化: 使用する文字だけのフォントファイルを作成すること。（不要の文字の読み込みを減らし、高速化が図れる）
export const inter = Inter({ subsets: ['latin']});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})
