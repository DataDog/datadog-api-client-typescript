/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsServerSideEventItemAccount } from "./ProductAnalyticsServerSideEventItemAccount";
import { ProductAnalyticsServerSideEventItemApplication } from "./ProductAnalyticsServerSideEventItemApplication";
import { ProductAnalyticsServerSideEventItemEvent } from "./ProductAnalyticsServerSideEventItemEvent";
import { ProductAnalyticsServerSideEventItemSession } from "./ProductAnalyticsServerSideEventItemSession";
import { ProductAnalyticsServerSideEventItemType } from "./ProductAnalyticsServerSideEventItemType";
import { ProductAnalyticsServerSideEventItemUsr } from "./ProductAnalyticsServerSideEventItemUsr";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Product Analytics server-side event.
 */
export class ProductAnalyticsServerSideEventItem {
  /**
   * The account linked to your event.
   */
  "account"?: ProductAnalyticsServerSideEventItemAccount;
  /**
   * The application in which you want to send your events.
   */
  "application": ProductAnalyticsServerSideEventItemApplication;
  /**
   * Fields used for the event.
   */
  "event": ProductAnalyticsServerSideEventItemEvent;
  /**
   * The session linked to your event.
   */
  "session"?: ProductAnalyticsServerSideEventItemSession;
  /**
   * The type of Product Analytics event. Must be `server` for server-side events.
   */
  "type": ProductAnalyticsServerSideEventItemType;
  /**
   * The user linked to your event.
   */
  "usr"?: ProductAnalyticsServerSideEventItemUsr;

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
    account: {
      baseName: "account",
      type: "ProductAnalyticsServerSideEventItemAccount",
    },
    application: {
      baseName: "application",
      type: "ProductAnalyticsServerSideEventItemApplication",
      required: true,
    },
    event: {
      baseName: "event",
      type: "ProductAnalyticsServerSideEventItemEvent",
      required: true,
    },
    session: {
      baseName: "session",
      type: "ProductAnalyticsServerSideEventItemSession",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsServerSideEventItemType",
      required: true,
    },
    usr: {
      baseName: "usr",
      type: "ProductAnalyticsServerSideEventItemUsr",
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
    return ProductAnalyticsServerSideEventItem.attributeTypeMap;
  }

  public constructor() {}
}
