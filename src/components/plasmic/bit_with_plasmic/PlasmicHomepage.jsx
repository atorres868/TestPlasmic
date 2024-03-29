// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nMYeLQHQshrX7VNJy72yBY
// Component: -C2FrQ1ZqHYa
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { GridControl } from "../../BSGridControl"; // plasmic-import: DsRyq4yWTE/codeComponent
import { BsDropdown } from "../../BSDropdown"; // plasmic-import: -8zFdJUAyH/codeComponent
import { BsButton } from "../../BSButton"; // plasmic-import: T7xM5W3zCF/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_bit_with_plasmic.module.css"; // plasmic-import: nMYeLQHQshrX7VNJy72yBY/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: -C2FrQ1ZqHYa/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Bsoft."}
          </h1>
          <GridControl
            data-plasmic-name={"gridControl"}
            data-plasmic-override={overrides.gridControl}
            allowPaging={true}
            className={classNames("__wab_instance", sty.gridControl)}
            dataSource={[
              {
                ProductID: 10250,
                ProductName: "Sandia",
                QuantityPerUnit: 12,
                PurchaseDate: "2022-07-1",
                UnitPrice: 30.5,
                UnitsInStock: 20
              },
              {
                ProductID: 10251,
                ProductName: "Manzana",
                QuantityPerUnit: 20,
                PurchaseDate: "2022-07-2",
                UnitPrice: 15.5,
                UnitsInStock: 25
              }
            ]}
            enableFrozenCommand={true}
            gridData={{
              columns: [
                { field: "ProductID", width: 250 },
                { field: "ProductName", width: 250 },
                { field: "QuantityPerUnit", width: 250 },
                { field: "PurchaseDate", width: 250 },
                { field: "UnitPrice", width: 250 },
                { field: "UnitsInStock", width: 250 }
              ]
            }}
            height={200}
            width={900}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <BsDropdown
              bsInput={true}
              className={classNames("__wab_instance", sty.bsDropdown__uMcmy)}
              color={"primary"}
              dataSource={[
                { id: "USA", label: "United States of America" },
                { id: "EC", label: "Ecuador" },
                { id: "ES", label: "España" }
              ]}
              fields={{ text: "label", value: "id" }}
              width={200}
            />

            <BsButton
              data-plasmic-name={"bsButton"}
              data-plasmic-override={overrides.bsButton}
              className={classNames("__wab_instance", sty.bsButton)}
              color={"primary"}
              content={"Sve"}
            />
          </div>
          <BsDropdown
            className={classNames("__wab_instance", sty.bsDropdown__a0Rti)}
            color={"primary"}
            dataSource={[
              { id: "USA", label: "United States of America" },
              { id: "EC", label: "Ecuador" },
              { id: "ES", label: "España" }
            ]}
            width={200}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Nuevo texto para ver si se guarda"}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "gridControl", "freeBox", "bsButton", "text"],
  h1: ["h1"],
  gridControl: ["gridControl"],
  freeBox: ["freeBox", "bsButton"],
  bsButton: ["bsButton"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    gridControl: makeNodeComponent("gridControl"),
    freeBox: makeNodeComponent("freeBox"),
    bsButton: makeNodeComponent("bsButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
