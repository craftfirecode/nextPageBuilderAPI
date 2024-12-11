import type { Schema, Struct } from '@strapi/strapi';

export interface CmsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_cms_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    accordionList: Schema.Attribute.Component<'items.accordion-items', true>;
  };
}

export interface CmsButton extends Struct.ComponentSchema {
  collectionName: 'components_cms_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    content: Schema.Attribute.String;
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['btn-primary', 'btn-secondary']>;
  };
}

export interface CmsCarouse extends Struct.ComponentSchema {
  collectionName: 'components_cms_carouses';
  info: {
    displayName: 'Carouse';
  };
  attributes: {
    carousel: Schema.Attribute.Component<'items.carousel-items', true>;
    vh: Schema.Attribute.Enumeration<['vh-100', 'vh-75', 'vh-50', 'vh-25']>;
  };
}

export interface CmsContent extends Struct.ComponentSchema {
  collectionName: 'components_cms_contents';
  info: {
    description: '';
    displayName: 'Content';
  };
  attributes: {
    width: Schema.Attribute.Enumeration<['w-100', 'w-75', 'w-50', 'w-25']>;
    wysiwyg: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface CmsContentImage extends Struct.ComponentSchema {
  collectionName: 'components_cms_content_images';
  info: {
    description: '';
    displayName: 'ContentImage';
  };
  attributes: {
    button: Schema.Attribute.Component<'cms.button', false>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgDark: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean;
  };
}

export interface CmsHero extends Struct.ComponentSchema {
  collectionName: 'components_cms_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'cms.button', false>;
    content: Schema.Attribute.Component<'cms.content', false>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    vh: Schema.Attribute.Enumeration<['vh-100', 'vh-75', 'vh-50', 'vh-25']>;
  };
}

export interface CmsImage extends Struct.ComponentSchema {
  collectionName: 'components_cms_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgDark: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSmall: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSmallDark: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface CmsImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_cms_image_grids';
  info: {
    displayName: 'ImageGrid';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CmsMargin extends Struct.ComponentSchema {
  collectionName: 'components_cms_margins';
  info: {
    displayName: 'Margin';
  };
  attributes: {
    mb: Schema.Attribute.Enumeration<['mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5']>;
    mt: Schema.Attribute.Enumeration<['mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5']>;
    pb: Schema.Attribute.Enumeration<['pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5']>;
    pt: Schema.Attribute.Enumeration<['pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5']>;
  };
}

export interface CmsModal extends Struct.ComponentSchema {
  collectionName: 'components_cms_modals';
  info: {
    displayName: 'Modal';
  };
  attributes: {
    button: Schema.Attribute.Component<'cms.button', false>;
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CmsPostCategory extends Struct.ComponentSchema {
  collectionName: 'components_cms_post_categories';
  info: {
    displayName: 'PostCategory';
  };
  attributes: {
    category: Schema.Attribute.Component<'items.post-category-list', true>;
    filter: Schema.Attribute.Boolean;
    limit: Schema.Attribute.Integer;
  };
}

export interface CmsRating extends Struct.ComponentSchema {
  collectionName: 'components_cms_ratings';
  info: {
    displayName: 'Rating';
  };
  attributes: {
    rating0: Schema.Attribute.Integer;
    rating1: Schema.Attribute.Integer;
    rating2: Schema.Attribute.Integer;
  };
}

export interface CmsVHero extends Struct.ComponentSchema {
  collectionName: 'components_cms_v_heroes';
  info: {
    description: '';
    displayName: 'VHero';
  };
  attributes: {
    button: Schema.Attribute.Component<'cms.button', false>;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mask: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    vh: Schema.Attribute.Enumeration<['vh-100', 'vh-75', 'vh-50', 'vh-25']>;
    wysiwyg: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface CoreContentWidth extends Struct.ComponentSchema {
  collectionName: 'components_core_content_widths';
  info: {
    displayName: 'ContentWidth';
  };
  attributes: {
    width: Schema.Attribute.Enumeration<['w-100', 'w-75', 'w-50', 'w-25']>;
  };
}

export interface ItemsAccordionItems extends Struct.ComponentSchema {
  collectionName: 'components_items_accordion_items';
  info: {
    displayName: 'AccordionItems';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ItemsCarouselItems extends Struct.ComponentSchema {
  collectionName: 'components_items_carousel_items';
  info: {
    displayName: 'CarouselItems';
  };
  attributes: {
    content: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ItemsImageItems extends Struct.ComponentSchema {
  collectionName: 'components_items_image_items';
  info: {
    displayName: 'ImageItems';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ItemsLevelItems extends Struct.ComponentSchema {
  collectionName: 'components_items_level_items';
  info: {
    displayName: 'LevelItems';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['a', 'b', 'c']>;
  };
}

export interface ItemsListItems extends Struct.ComponentSchema {
  collectionName: 'components_items_list_items';
  info: {
    displayName: 'ListItems';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface ItemsNavItems extends Struct.ComponentSchema {
  collectionName: 'components_items_nav_items';
  info: {
    displayName: 'NavItems';
  };
  attributes: {
    link: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
  };
}

export interface ItemsPostCategoryList extends Struct.ComponentSchema {
  collectionName: 'components_items_post_category_lists';
  info: {
    description: '';
    displayName: 'PostCategoryList';
  };
  attributes: {
    categoryList: Schema.Attribute.Enumeration<
      ['Frontend', 'Backend', 'UI/UX Design', 'Figma']
    >;
    filter: Schema.Attribute.Boolean;
    limit: Schema.Attribute.Integer;
  };
}

export interface MetaSeo extends Struct.ComponentSchema {
  collectionName: 'components_meta_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface NavNav extends Struct.ComponentSchema {
  collectionName: 'components_nav_navs';
  info: {
    description: '';
    displayName: 'Nav';
  };
  attributes: {
    hidden: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    submenu: Schema.Attribute.Component<'items.nav-items', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms.accordion': CmsAccordion;
      'cms.button': CmsButton;
      'cms.carouse': CmsCarouse;
      'cms.content': CmsContent;
      'cms.content-image': CmsContentImage;
      'cms.hero': CmsHero;
      'cms.image': CmsImage;
      'cms.image-grid': CmsImageGrid;
      'cms.margin': CmsMargin;
      'cms.modal': CmsModal;
      'cms.post-category': CmsPostCategory;
      'cms.rating': CmsRating;
      'cms.v-hero': CmsVHero;
      'core.content-width': CoreContentWidth;
      'items.accordion-items': ItemsAccordionItems;
      'items.carousel-items': ItemsCarouselItems;
      'items.image-items': ItemsImageItems;
      'items.level-items': ItemsLevelItems;
      'items.list-items': ItemsListItems;
      'items.nav-items': ItemsNavItems;
      'items.post-category-list': ItemsPostCategoryList;
      'meta.seo': MetaSeo;
      'nav.nav': NavNav;
    }
  }
}
