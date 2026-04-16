/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IoCExplorerListResponseMetadata } from "./IoCExplorerListResponseMetadata";
import { IoCExplorerListResponsePaging } from "./IoCExplorerListResponsePaging";
import { IoCIndicator } from "./IoCIndicator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
