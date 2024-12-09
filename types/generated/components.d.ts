import type { Schema, Attribute } from '@strapi/strapi';

export interface NavNav extends Schema.Component {
  collectionName: 'components_nav_navs';
  info: {
    displayName: 'Nav';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    page: Attribute.Relation<'nav.nav', 'oneToOne', 'api::page.page'>;
    submenu: Attribute.Component<'items.nav-items', true>;
    hidden: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface MetaSeo extends Schema.Component {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    ogImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CoreContentWidth extends Schema.Component {
  collectionName: 'components_core_content_widths';
  info: {
    displayName: 'ContentWidth';
  };
  attributes: {
    width: Attribute.Enumeration<['w-100', 'w-75', 'w-50', 'w-25']>;
  };
}

export interface CmsVHero extends Schema.Component {
  collectionName: 'components_cms_v_heroes';
  info: {
    displayName: 'VHero';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'videos'>;
    mask: Attribute.Media<'images'>;
    vh: Attribute.Enumeration<['vh-25', 'vh-50', 'vh-75', 'vh-100']>;
    button: Attribute.Component<'cms.button'>;
    content: Attribute.Blocks;
  };
}

export interface CmsUpdate extends Schema.Component {
  collectionName: 'components_cms_updates';
  info: {
    displayName: 'Update';
  };
  attributes: {
    date: Attribute.Date;
  };
}

export interface CmsRating extends Schema.Component {
  collectionName: 'components_cms_ratings';
  info: {
    displayName: 'Rating';
    description: '';
  };
  attributes: {
    rating0: Attribute.Integer;
    rating1: Attribute.Integer;
    rating2: Attribute.Integer;
  };
}

export interface CmsPostCategory extends Schema.Component {
  collectionName: 'components_cms_post_categories';
  info: {
    displayName: 'PostCategory';
    description: '';
  };
  attributes: {
    category: Attribute.Component<'items.post-category-list'>;
    filter: Attribute.Boolean & Attribute.DefaultTo<false>;
    limit: Attribute.Integer;
  };
}

export interface CmsModal extends Schema.Component {
  collectionName: 'components_cms_modals';
  info: {
    displayName: 'Modal';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Component<'cms.button'>;
    content: Attribute.Blocks;
  };
}

export interface CmsMargin extends Schema.Component {
  collectionName: 'components_cms_margins';
  info: {
    displayName: 'Margin';
    description: '';
  };
  attributes: {
    mb: Attribute.Enumeration<
      [
        'mb-static-15',
        'mb-static-20',
        'mb-static-30',
        'mb-static-45',
        'mb-static-50'
      ]
    >;
    pt: Attribute.Enumeration<
      [
        'pt-static-15',
        'pt-static-20',
        'pt-static-30',
        'pt-static-45',
        'pt-static-50'
      ]
    >;
    pb: Attribute.Enumeration<
      [
        'pb-static-15',
        'pb-static-20',
        'pb-static-30',
        'pb-static-45',
        'pb-static-50'
      ]
    >;
    mt: Attribute.Enumeration<
      [
        'mt-static-15',
        'mt-static-20',
        'mt-static-30',
        'mt-static-45',
        'mt-static-50'
      ]
    >;
  };
}

export interface CmsMap extends Schema.Component {
  collectionName: 'components_cms_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    Iframe: Attribute.String;
  };
}

export interface CmsList extends Schema.Component {
  collectionName: 'components_cms_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    List: Attribute.Component<'items.list-items', true>;
  };
}

export interface CmsImage extends Schema.Component {
  collectionName: 'components_cms_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSmall: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgDark: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSmallDark: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmsImageGrid extends Schema.Component {
  collectionName: 'components_cms_image_grids';
  info: {
    displayName: 'ImageGrid';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface CmsHero extends Schema.Component {
  collectionName: 'components_cms_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'cms.button'>;
    vh: Attribute.Enumeration<['vh-25', 'vh-50', 'vh-75', 'vh-100']>;
    content: Attribute.Component<'cms.content'>;
    background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CmsHeadline extends Schema.Component {
  collectionName: 'components_cms_headlines';
  info: {
    displayName: 'Headline';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
  };
}

export interface CmsDisclaimer extends Schema.Component {
  collectionName: 'components_cms_disclaimers';
  info: {
    displayName: 'Disclaimer';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface CmsContent extends Schema.Component {
  collectionName: 'components_cms_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    center: Attribute.Boolean & Attribute.DefaultTo<false>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    width: Attribute.Enumeration<['w-100', 'w-75', 'w-50', 'w-25']>;
  };
}

export interface CmsContentImage extends Schema.Component {
  collectionName: 'components_cms_content_images';
  info: {
    displayName: 'ContentImage';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'cms.button'>;
    image: Attribute.Media<'images'>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    content: Attribute.Blocks;
    imgDark: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CmsCollection extends Schema.Component {
  collectionName: 'components_cms_collections';
  info: {
    displayName: 'Collection';
  };
  attributes: {
    endpoint: Attribute.String;
  };
}

export interface CmsCodeBlock extends Schema.Component {
  collectionName: 'components_cms_code_blocks';
  info: {
    displayName: 'CodeBlock';
    description: '';
  };
  attributes: {
    code: Attribute.Text;
  };
}

export interface CmsCarousel extends Schema.Component {
  collectionName: 'components_cms_carousels';
  info: {
    displayName: 'Carouse';
    description: '';
  };
  attributes: {
    carousel: Attribute.Component<'items.carousel-items', true>;
    vh: Attribute.Enumeration<['vh-25', 'vh-50', 'vh-75', 'vh-100']>;
  };
}

export interface CmsButton extends Schema.Component {
  collectionName: 'components_cms_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    style: Attribute.Enumeration<['btn-primary', 'btn-outline-primary']>;
    link: Attribute.String;
  };
}

export interface CmsAccordion extends Schema.Component {
  collectionName: 'components_cms_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    accordionList: Attribute.Component<'items.accordion-items', true>;
  };
}

export interface ItemsPostCategoryList extends Schema.Component {
  collectionName: 'components_items_post_category_lists';
  info: {
    displayName: 'PostCategoryList';
    description: '';
  };
  attributes: {
    categoryList: Attribute.Enumeration<
      [
        'KI',
        'React',
        'WordPress',
        'NextJs',
        'Figma',
        'WebDesign',
        'Frontend',
        'IT',
        'Algemein',
        'othrt'
      ]
    >;
  };
}

export interface ItemsNavItems extends Schema.Component {
  collectionName: 'components_items_nav_items';
  info: {
    displayName: 'NavItems';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    page: Attribute.Relation<'items.nav-items', 'oneToOne', 'api::page.page'>;
  };
}

export interface ItemsListItems extends Schema.Component {
  collectionName: 'components_cms_list_items';
  info: {
    displayName: 'ListItems';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface ItemsLevelItems extends Schema.Component {
  collectionName: 'components_items_level_items';
  info: {
    displayName: 'LevelItems';
  };
  attributes: {
    level: Attribute.Enumeration<['Low-Level', 'Middle-Level', 'High-Level']>;
  };
}

export interface ItemsImageItems extends Schema.Component {
  collectionName: 'components_items_image_items';
  info: {
    displayName: 'ImageItems';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ItemsCarouselItems extends Schema.Component {
  collectionName: 'components_items_carousel_items';
  info: {
    displayName: 'CarouselItems';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images'>;
    headline: Attribute.String;
    content: Attribute.String;
  };
}

export interface ItemsAccordionItems extends Schema.Component {
  collectionName: 'components_cms_accordion_items';
  info: {
    displayName: 'AccordionItems';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav.nav': NavNav;
      'meta.seo': MetaSeo;
      'core.content-width': CoreContentWidth;
      'cms.v-hero': CmsVHero;
      'cms.update': CmsUpdate;
      'cms.rating': CmsRating;
      'cms.post-category': CmsPostCategory;
      'cms.modal': CmsModal;
      'cms.margin': CmsMargin;
      'cms.map': CmsMap;
      'cms.list': CmsList;
      'cms.image': CmsImage;
      'cms.image-grid': CmsImageGrid;
      'cms.hero': CmsHero;
      'cms.headline': CmsHeadline;
      'cms.disclaimer': CmsDisclaimer;
      'cms.content': CmsContent;
      'cms.content-image': CmsContentImage;
      'cms.collection': CmsCollection;
      'cms.code-block': CmsCodeBlock;
      'cms.carousel': CmsCarousel;
      'cms.button': CmsButton;
      'cms.accordion': CmsAccordion;
      'items.post-category-list': ItemsPostCategoryList;
      'items.nav-items': ItemsNavItems;
      'items.list-items': ItemsListItems;
      'items.level-items': ItemsLevelItems;
      'items.image-items': ItemsImageItems;
      'items.carousel-items': ItemsCarouselItems;
      'items.accordion-items': ItemsAccordionItems;
    }
  }
}
