import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCExplorerListResponseMetadata } from "./IoCExplorerListResponseMetadata";
import { IoCExplorerListResponsePaging } from "./IoCExplorerListResponsePaging";
import { IoCIndicator } from "./IoCIndicator";

/**
 * Attributes of the IoC Explorer list response.
 */
export class IoCExplorerListResponseAttributes {
  /**
   * List of indicators of compromise.
   */
  "data"?: Array<IoCIndicator>;
  /**
   * Response metadata.
   */
  "metadata"?: IoCExplorerListResponseMetadata;
  /**
   * Pagination information.
   */
  "paging"?: IoCExplorerListResponsePaging;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<IoCIndicator>",
    },
    metadata: {
      baseName: "metadata",
      type: "IoCExplorerListResponseMetadata",
    },
    paging: {
      baseName: "paging",
      type: "IoCExplorerListResponsePaging",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IoCExplorerListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
