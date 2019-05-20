// NOTE: currently there's no way to patch original declarations
declare module "react-intl" {
  namespace FormattedRelative {
    interface PropsBase {
      // NOTE: style is incorrectly typed as "best-fit" | "numeric"
      // style?: "best fit" | "numeric";
    }
  }

  namespace FormattedPlural {
    interface PropsBase {
      // NOTE: other is a required prop
      // other: any;
    }
  }
}
