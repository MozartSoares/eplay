import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/botao-play 1.png'
import lupa from '../../assets/images/mais-zoom 1.png'
import close from '../../assets/images/close 1.png'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return lupa
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              className="close-icon"
              src={close}
              alt="Ícone de fechar"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Mídia do jogo ${name}`} />
          ) : (
            <iframe
              frameBorder={0}
              src={modal.url}
              title={`Mídia do jogo ${name}`}
            />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}
export default Gallery
