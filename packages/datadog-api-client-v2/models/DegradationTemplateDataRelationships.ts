/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DegradationTemplateDataRelationshipsCreatedByUser } from "./DegradationTemplateDataRelationshipsCreatedByUser";
import { DegradationTemplateDataRelationshipsLastModifiedByUser } from "./DegradationTemplateDataRelationshipsLastModifiedByUser";
import { DegradationTemplateDataRelationshipsStatusPage } from "./DegradationTemplateDataRelationshipsStatusPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a degradation template.
 */
export class DegradationTemplateDataRelationships {
  /**
   * The Datadog user who created the degradation template.
   */
  "createdByUser"?: DegradationTemplateDataRelationshipsCreatedByUser;
  /**
   * The Datadog user who last modified the degradation template.
   */
  "lastModifiedByUser"?: DegradationTemplateDataRelationshipsLastModifiedByUser;
  /**
   * The status page the degradation template belongs to.
   */
  "statusPage"?: DegradationTemplateDataRelationshipsStatusPage;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "DegradationTemplateDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "DegradationTemplateDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "DegradationTemplateDataRelationshipsStatusPage",
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
    return DegradationTemplateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
